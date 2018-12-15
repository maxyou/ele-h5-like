import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
const StyledShopDetail = styled.div`
    display:flex;
    flex-direction: column;

`
class ShopDetail extends React.Component {

    constructor(props){
        super(props)

        // this.state = null
        
    }


    httpUpdate(){
        axios.get('/shopping/restaurant/'+this.props.match.params.id)
            .then(res=>{
                if(res.status===200){
                    console.log('axios 200 shop detail')
                    // console.log(JSON.stringify(res))
                    // console.log(res)

                    this.setState({...res.data})
                }
                // console.log(res)
            })
    }

    componentDidMount() {
        this.httpUpdate()
    }
    
    render() {

        // console.log(this.state)
        if(this.state){
            return (
                <StyledShopDetail>detail
                <div>{this.state.name}</div>
                <div>{this.state.address}</div>
                <div>{this.state.category}</div>
            </StyledShopDetail>
            )
        }else{
            return <div>no data</div>
        }
    }
}

export default ShopDetail
