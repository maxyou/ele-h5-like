import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Shop from 'businesses/shops/shop'

// const StyledDiv = styled.div`    
// `

class Shops extends React.Component {

    constructor(props){
        super(props)

        // this.state = null
        
    }

    httpUpdate(){
        axios.get('/shopping/restaurants',{
            params:{
                latitude: 31.38098,
                longitude: 121.50146
            }
        })
            .then(res=>{
                if(res.status===200){
                    console.log('axios 200')
                    // console.log(res)
                    this.setState(res.data)
                }
                // console.log(res)
            })
    }

    componentDidMount() {
        this.httpUpdate()
    }
    
    render() {
        if(this.state){
            const v = Object.values(this.state) 
            // console.log(v)            
            return (
                <div>
                    {v.map(
                        (item)=>(<div key={item.id}>
                            <Shop {...item}/>
                            <hr/>                          
                            </div>)
                    )}
                </div>
            )
        }else{
            return <div>no data</div>
        }
    }
}

export default Shops

// const mapStateToProps = state => ({
// })
// const mapDispatchToProps = dispatch => ({
// })
// export default withRouter(connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Shops))
