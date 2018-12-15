import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Food from 'businesses/order/food'
import Cart from 'businesses/order/cart'
import {Map, List} from 'immutable'
import MockAdapter from 'axios-mock-adapter'

var http = axios.create()

var mock = new MockAdapter(http)
mock.onGet('/shopping/v2/menu').reply(200,{
    users:[
        {id:1, name:'JS'},
        {id:2, name:'Java'},
        {id:3, name:'Go'},
    ]

})

const deactive = '#dddddd'
const active = '#aaaaaa'
const cartHeight = 80 //px

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
        /* background-color: ${props=>props.current===0?active:deactive}; */
        background-color: #dddddd;
        display:flex;
        justify-content:center;
        align-items:center;
        border: ${props=>props.current===0?'1px dotted red':'0px dotted red'};
    }
    .discount{
        background-color: #dddddd;
        display:flex;
        justify-content:center;
        align-items:center;
        border: ${props=>props.current===1?'1px dotted red':'0px dotted red'};
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
const StyledOrderCart = styled.div`
    height: ${cartHeight+'px'};
    width: 100%;
    background-color:green;
    float:left;
`

class Order extends React.Component {

    constructor(props){
        super(props)

        this.state = {data:Map({
                            current:0,
                            hotsales: List(),
                            discounted: List()
                        })}
        
        this.id_buttons = 'buttons'
        this.id_allfoods = 'allfoods'
        this.id_hot = 'hot'
        this.id_discount = 'discount'

        this.allfoods = null
        this.hotFoods = null
        this.discountFoods = null

        this.pickHotSales = this.pickHotSales.bind(this)
        this.pickDiscounted = this.pickDiscounted.bind(this)
        this.resizeAllFoodsHeight = this.resizeAllFoodsHeight.bind(this)
    }

    httpUpdate(){
        // axios.get('/shopping/v2/menu?restaurant_id='+this.props.match.params.id)
        http.get('/shopping/v2/menu')
            .then(res=>{
                if(res.status===200){
                    console.log('axios 200')
                    console.log(JSON.stringify(res.data))

                    // this.setState(
                    //     ({data})=>({
                    //         data:data.merge(
                    //             Map({
                    //                 hotsales:List(this.mockFoodsData(res.data[0].foods)),
                    //                 discounted:List(this.mockFoodsData(res.data[1].foods))
                    //             })
                    //         )
                    //     })
                    // )
                }
                // console.log(res)
            })
    }

    mockFoodsData(foods){ //to mock large list
        let extFoods = []
        for(let i=0;i<20;i++){
            extFoods[i] = {}
            extFoods[i].foods = foods[i%3]
            extFoods[i].id = i
            extFoods[i].pickCount = 0
        }
        return extFoods
    }

    resizeAllFoodsHeight(){
        this.allfoods.style.height = (document.documentElement.clientHeight - this.allfoods.offsetTop - cartHeight) + 'px'
    }
    componentDidMount() {

        this.httpUpdate()

        this.buttons = document.getElementById(this.id_buttons)
        this.allfoods = document.getElementById(this.id_allfoods)
        this.hotFoods = document.getElementById(this.id_hot)
        this.discountFoods = document.getElementById(this.id_discount)

        // console.log(document.compatMode)
        // console.log('body.clientHeight:'+document.documentElement.clientHeight)
        // console.log('allfoods.offsetTop:'+this.allfoods.offsetTop)
        // console.log('allfoods.style.height:'+(document.body.clientHeight - this.allfoods.offsetTop) + 'px')
        // this.allfoods.style.height = (document.documentElement.clientHeight - this.allfoods.offsetTop) + 'px'
        this.resizeAllFoodsHeight()
        window.onresize = this.resizeAllFoodsHeight

        this.allfoods.onscroll = (e)=>{
            // console.log('allfoods.scrollTop:'+this.allfoods.scrollTop)
            // console.log('allfoods.offsetTop:'+this.allfoods.offsetTop)
            // console.log('hotFoods.scrollTop:'+this.hotFoods.scrollTop)
            // console.log('hotFoods.offsetTop:'+this.hotFoods.offsetTop)
            // console.log('discountFoods.scrollTop:'+this.discountFoods.scrollTop)
            // console.log('discountFoods.offsetTop:'+this.discountFoods.offsetTop)
            // console.log(this.discountFoods.offsetTop)
            // console.log(this.state.current)
            if(
                // this.allfoods.scrollTop >= 
                // (this.discountFoods.offsetTop - this.buttons.offsetTop)

                this.allfoods.scrollTop >= this.hotFoods.offsetHeight
                ){
                this.setState(
                    ({data})=>({
                        data:data.merge({current:1})                    
                    })
                )
            }else{
                this.setState(
                    ({data})=>({
                        data:data.merge({current:0})
                    })
                )

            }
        }
    }
    
    showList(id){
        // console.log('show foods 1')
        // document.getElementById(id).scrollIntoView()
        if(id===this.id_hot){
            this.allfoods.scrollTop = 0
        }else{
            this.allfoods.scrollTop = this.hotFoods.offsetHeight
        }
    }

    pickHotSales(n, index){
        // var stateCopy = Object.assign({}, this.state)
        // stateCopy.hotsales[index].pickCount += n
        // if(stateCopy.hotsales[index].pickCount < 0){
        //     stateCopy.hotsales[index].pickCount = 0
        // }
        // this.setState(stateCopy)
        console.log(n)
        console.log(index)
        this.setState(
            ({data})=>({
                // data:data.updateIn(['hotsales', index], v=>{
                //         // v.pickCount += n
                //         console.log(v)
                //         let nv = Object.assign({}, v)
                //         nv.pickCount += n
                //         console.log(nv.pickCount)
                //         return nv

                // })
                data:data.update('hotsales', v=>v.update(index, vv=>({
                    ...vv, pickCount:(vv.pickCount+n)<0?0:vv.pickCount+n
                }))
                    // {
                    //     v.update(index, vv=>{
                    //         vv.pickCount += n
                    //         return vv
                    //     })
                    //     return v
                    // }
                )
            })
        )
    }
    
    pickDiscounted(n, index){
        this.setState(
            ({data})=>({
                data:data.update('discounted', v=>v.update(index, vv=>({
                    ...vv, pickCount:(vv.pickCount+n)<0?0:vv.pickCount+n
                    }))
                )
            })
        )
    }
    

    render() {
        // console.log(this.state.data)

        return (<StyledOrder>

            <StyledButtons  id={this.id_buttons} {...this.state.data.toJS()}>
                <div className="hot" onClick={()=>this.showList(this.id_hot)}>热卖</div>
                <div className="discount" onClick={()=>this.showList(this.id_discount)}>打折</div>
            </StyledButtons>

            <StyledFoods id={this.id_allfoods}>
                <div id={this.id_hot}>
                    <div>热卖区</div>
                    {
                        this.state.data.get('hotsales')?this.state.data.get('hotsales').map((item)=><div key={item.id}>
                                <Food {...item} onPick={this.pickHotSales}/>
                            </div>):null
                    }
                </div>
                <div id={this.id_discount}>
                    <div>打折区</div>
                    {
                        this.state.data.get('discounted')?this.state.data.get('discounted').map((item)=><div key={item.id}>
                                <Food {...item} onPick={this.pickDiscounted}/>
                            </div>):null
                    }
                </div>
            </StyledFoods>

            <StyledOrderCart>
                <Cart></Cart>                
            </StyledOrderCart>
        </StyledOrder>)


    }
}

export default Order