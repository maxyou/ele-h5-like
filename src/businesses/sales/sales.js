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
    }
    .discount{
        background-color: ${props=>props.current==1?active:deactive};
    }

`
const StyledButtonDiv = styled.div`
        width:90%;
        margin:3%;
        padding:3%;
        border: 2px dotted red;
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
        this.hot = 'hot'
        this.discount = 'discount'
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
    }
    
    showList(id){
        // console.log('show foods 1')
        document.getElementById(id).scrollIntoView()
    }

    render() {
        // console.log(this.state)

        return (<div>

            <StyledButtons {...this.state}>
                <div className="hot" onClick={()=>this.showList(this.hot)}>Hot</div>
                <div className="discount" onClick={()=>this.showList(this.discount)}>Discount</div>
            </StyledButtons>

            <StyledFoods>
                <div id={this.hot}>
                    {
                        this.state.foods0?this.state.foods0.map((item)=><div key={item.id}>
                                <Food {...item.foods} />
                            </div>):null
                    }
                </div>
                <div id={this.discount}>
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