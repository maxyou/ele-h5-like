import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Food from 'businesses/sales/food'

//
//.attrs({
 //   current0: this.state.current==0?'#c0f0f0':'#f0c0f0',
    //current1: this.state.current==1?'#c0f0f0':'#f0c0f0'
//}
//)
const StyledButtons = styled.div`
    /* background-color: #10f0f0; */
    width: 20%;
    float:left;
    display: flex;
    flex-direction:column;


`
const StyledButtonDiv = styled.div`
        width:90%;
        margin:3%;
        padding:3%;

        &.b0{
            /* background-color: #1cffff; */
            background-color: ${props=>props.current==0?'#1cffff':'#1fccff'};
        }
        &.b1{
            /* background-color: #ff1cff; */
            background-color: ${props=>props.current==1?'#ccffff':'#1fccff'};
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
    
    render() {
        // console.log(this.state)

        return (<div>

            <StyledButtons>
                <StyledButtonDiv className="b0" {...this.state}>b0</StyledButtonDiv>
                <StyledButtonDiv className="b1" {...this.state}>b1</StyledButtonDiv>
            </StyledButtons>

            <StyledFoods>                    
                {
                    this.state.foods0?this.state.foods0.map((item)=><div key={item.id}>
                            <Food {...item.foods} />
                        </div>):null
                }
                {
                    this.state.foods1?this.state.foods1.map((item)=><div key={item.id}>
                            <Food {...item.foods} />
                        </div>):null
                }
            </StyledFoods>


        </div>)


    }
}

export default Seles