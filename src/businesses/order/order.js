import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Food from 'businesses/order/food'

const deactive = '#dddddd'
const active = '#aaaaaa'
const StyledOrder = styled.div`

`
const StyledButtons = styled.div`
    width: 20%;
    float:left;

    div{
        width:80%;
        height: 30px;
        margin:3px;
        padding:3px;
    }
    .hot{
        /* background-color: ${props=>props.current==0?active:deactive}; */
        background-color: #dddddd;
        display:flex;
        justify-content:center;
        align-items:center;
        border: ${props=>props.current==0?'1px dotted red':'0px dotted red'};
    }
    .discount{
        background-color: #dddddd;
        display:flex;
        justify-content:center;
        align-items:center;
        border: ${props=>props.current==1?'1px dotted red':'0px dotted red'};
    }
`
const StyledFoods = styled.div`
    background-color: #f0f0c0;
    width: 79%;
    height: 100vh;
    float:left;
    display: flex;
    flex-direction:column;
    overflow:scroll;
`

class Order extends React.Component {

    constructor(props){
        super(props)

        this.state = {current:0}
        
        this.id_buttons = 'buttons'
        this.id_allfoods = 'allfoods'
        this.id_hot = 'hot'
        this.id_discount = 'discount'

        this.allfoods = null
        this.hotFoods = null
        this.discountFoods = null

        this.pickHotSales = this.pickHotSales.bind(this)
        this.pickDiscounted = this.pickDiscounted.bind(this)
    }

    httpUpdate(){
        axios.get('/shopping/v2/menu?restaurant_id='+this.props.match.params.id)
            .then(res=>{
                if(res.status===200){
                    console.log('axios 200')
                    // console.log(JSON.stringify(res.data))

                    this.setState({
                        hotsales:this.loopFoodsData(res.data[0].foods),
                        discounted:this.loopFoodsData(res.data[1].foods)
                    })
                }
                // console.log(res)
            })
    }

    loopFoodsData(foods){ //to mock large list
        let extFoods = []
        for(let i=0;i<20;i++){
            extFoods[i] = {}
            extFoods[i].foods = foods[i%3]
            extFoods[i].id = i
            extFoods[i].pickCount = 0
        }
        return extFoods
    }

    componentDidMount() {

        this.httpUpdate()

        this.buttons = document.getElementById(this.id_buttons)
        this.allfoods = document.getElementById(this.id_allfoods)
        this.hotFoods = document.getElementById(this.id_hot)
        this.discountFoods = document.getElementById(this.id_discount)

        this.allfoods.onscroll = (e)=>{
            console.log('allfoods.scrollTop:'+this.allfoods.scrollTop)
            console.log('allfoods.offsetTop:'+this.allfoods.offsetTop)
            console.log('hotFoods.scrollTop:'+this.hotFoods.scrollTop)
            console.log('hotFoods.offsetTop:'+this.hotFoods.offsetTop)
            // console.log(this.discountFoods.offsetTop)
            // console.log(this.state.current)
            if(
                // this.allfoods.scrollTop >= 
                // (this.discountFoods.offsetTop - this.buttons.offsetTop)

                this.allfoods.scrollTop >= this.hotFoods.offsetHeight
                ){
                this.setState({current:1})
            }else{
                this.setState({current:0})
            }
        }
    }
    
    showList(id){
        // console.log('show foods 1')
        // document.getElementById(id).scrollIntoView()
        if(id==this.id_hot){
            this.allfoods.scrollTop = 0
        }else{
            this.allfoods.scrollTop = this.hotFoods.offsetHeight
        }
    }

    pickHotSales(n, index){
        var stateCopy = Object.assign({}, this.state)
        stateCopy.hotsales[index].pickCount += n
        if(stateCopy.hotsales[index].pickCount < 0){
            stateCopy.hotsales[index].pickCount = 0
        }
        this.setState(stateCopy)
    }
    
    pickDiscounted(n, index){
        var stateCopy = Object.assign({}, this.state)
        stateCopy.discounted[index].pickCount += n
        if(stateCopy.discounted[index].pickCount < 0){
            stateCopy.discounted[index].pickCount = 0
        }
        this.setState(stateCopy)
    }
    

    render() {
        // console.log(this.state)

        return (<StyledOrder>

            <StyledButtons  id={this.id_buttons} {...this.state}>
                <div className="hot" onClick={()=>this.showList(this.id_hot)}>热卖</div>
                <div className="discount" onClick={()=>this.showList(this.id_discount)}>打折</div>
            </StyledButtons>

            <StyledFoods id={this.id_allfoods}>
                <div id={this.id_hot}>
                    <div>热卖区</div>
                    {
                        this.state.hotsales?this.state.hotsales.map((item)=><div key={item.id}>
                                <Food {...item} onPick={this.pickHotSales}/>
                            </div>):null
                    }
                </div>
                <div id={this.id_discount}>
                    <div>打折区</div>
                    {
                        this.state.discounted?this.state.discounted.map((item)=><div key={item.id}>
                                <Food {...item} onPick={this.pickDiscounted}/>
                            </div>):null
                    }
                </div>
            </StyledFoods>


        </StyledOrder>)


    }
}

export default Order