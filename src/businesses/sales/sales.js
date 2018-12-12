import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Food from 'businesses/sales/food'

const deactive = '#dddddd'
const active = '#aaaaaa'

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
        background-color: ${props=>props.current==0?active:deactive};
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .discount{
        background-color: ${props=>props.current==1?active:deactive};
        display:flex;
        justify-content:center;
        align-items:center;
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

class Seles extends React.Component {

    constructor(props){
        super(props)

        this.state = {current:0}
        
        this.id_allfoods = 'allfoods'
        this.id_hot = 'hot'
        this.id_discount = 'discount'

        this.allfoods = null
        this.hotFoods = null
        this.discountFoods = null
    }

    httpUpdate(){
        axios.get('/shopping/v2/menu?restaurant_id='+this.props.match.params.id)
            .then(res=>{
                if(res.status===200){
                    console.log('axios 200')
                    // console.log(res)

                    this.setState({
                        foods0:this.extFoods(res.data[0].foods),
                        foods1:this.extFoods(res.data[1].foods)
                    })
                }
                // console.log(res)
            })
    }

    extFoods(foods){
        let extFoods = []
        for(let i=0;i<20;i++){
            extFoods[i] = {}
            extFoods[i].foods = foods[i%3]
            extFoods[i].id = i
        }
        return extFoods
    }

    componentDidMount() {

        this.httpUpdate()

        this.allfoods = document.getElementById(this.id_allfoods)
        this.hotFoods = document.getElementById(this.id_hot)
        this.discountFoods = document.getElementById(this.id_discount)

        this.allfoods.onscroll = (e)=>{
            // console.log(this.allfoods.scrollTop)
            // console.log(this.discountFoods.offsetTop)
            // console.log(this.state.current)
            if(this.allfoods.scrollTop > this.discountFoods.offsetTop){
                this.setState({current:1})
            }else{
                this.setState({current:0})
            }
        }
    }
    
    showList(id){
        // console.log('show foods 1')
        document.getElementById(id).scrollIntoView()
    }

    render() {
        // console.log(this.state)

        return (<div>

            <StyledButtons {...this.state}>
                <div className="hot" onClick={()=>this.showList(this.id_hot)}>Hot</div>
                <div className="discount" onClick={()=>this.showList(this.id_discount)}>Discount</div>
            </StyledButtons>

            <StyledFoods id={this.id_allfoods}>
                <div id={this.id_hot}>
                    <div>this is hot</div>
                    {
                        this.state.foods0?this.state.foods0.map((item)=><div key={item.id}>
                                <Food {...item.foods} />
                            </div>):null
                    }
                </div>
                <div id={this.id_discount}>
                    <div>this is discount</div>
                    {
                        this.state.foods1?this.state.foods1.map((item)=><div key={item.id}>
                                <Food {...item.foods} />
                            </div>):null
                    }
                </div>
            </StyledFoods>


        </div>)


    }
}

export default Seles