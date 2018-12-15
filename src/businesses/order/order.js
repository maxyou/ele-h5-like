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
    hotsales:[
        {id:1, name:'咖啡', price: 1, imgindex:'coffee'},
        {id:2, name:'黄闷鸡', price: 2, imgindex:'chicken'},
        {id:3, name:'麦当劳', price: 3, imgindex:'mdl'},
        {id:4, name:'黄闷鸡', price: 4, imgindex:'chicken'},
        {id:5, name:'咖啡', price: 5, imgindex:'coffee'},
        {id:6, name:'过桥米线', price: 5, imgindex:'ricenoodle'},
        {id:7, name:'麦当劳', price: 6, imgindex:'mdl'},
    ],
    discounted:[
        {id:1, name:'过桥米线', price: 1, imgindex:'ricenoodle'},
        {id:2, name:'麦当劳', price: 2, imgindex:'mdl'},
        {id:3, name:'过桥米线', price: 3, imgindex:'ricenoodle'},
        {id:4, name:'黄闷鸡', price: 4, imgindex:'chicken'},
        {id:5, name:'咖啡', price: 5, imgindex:'coffee'},
        {id:6, name:'麦当劳', price: 6, imgindex:'mdl'},
        {id:7, name:'咖啡', price: 7, imgindex:'coffee'},
        {id:8, name:'黄闷鸡', price: 8, imgindex:'chicken'},
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

        this.pickFood = this.pickFood.bind(this)
        this.resizeAllFoodsHeight = this.resizeAllFoodsHeight.bind(this)
    }

    httpUpdate(){
        // axios.get('/shopping/v2/menu?restaurant_id='+this.props.match.params.id)
        http.get('/shopping/v2/menu')
            .then(res=>{
                if(res.status===200){
                    console.log('axios 200')
                    // console.log(JSON.stringify(res.data))

                    this.setState(
                        ({data})=>({
                            data:data.merge(
                                Map({
                                    hotsales:List(res.data.hotsales),
                                    discounted:List(res.data.discounted)
                                })
                            )
                        })
                    )
                }
                // console.log(res)
            })
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

    pickFood(type){
        return (n, id)=>{
            console.log(id)
            const index = this.state.data.get(type).findIndex(i => i.id == id)
            this.setState(
                ({data})=>({
                    data:data.update(type, v=>v.update(index, vv=>({
                        ...vv, pickCount:vv.pickCount?((vv.pickCount+n)<0?0:vv.pickCount+n):(n<0?0:n)
                    }))
                    )
                })
            )
        }
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
                                <Food {...item} onPick={this.pickFood('hotsales')}/>
                            </div>):null
                    }
                </div>
                <div id={this.id_discount}>
                    <div>打折区</div>
                    {
                        this.state.data.get('discounted')?this.state.data.get('discounted').map((item)=><div key={item.id}>
                                <Food {...item} onPick={this.pickFood('discounted')}/>
                            </div>):null
                    }
                </div>
            </StyledFoods>

            <StyledOrderCart>
                <Cart {...this.state.data.toJS()}></Cart>                
            </StyledOrderCart>
        </StyledOrder>)


    }
}

export default Order