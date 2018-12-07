import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Shop from 'businesses/shops/shop'

const StyledDiv = styled.div`    
    width: 100%;
    height: 200px;
    background-color:#147239;
`

class Category extends React.Component {

    constructor(props){
        super(props)

        this.state = null
        
    }

    httpUpdate(){
        axios.get('/v2/index_entry')
            .then(res=>{
                if(res.status===200){
                    console.log('axios 200')
                    console.log(res)
                    this.setState(res.data)
                }
                // console.log(res)
            })
    }

    componentDidMount() {
        this.httpUpdate()
    }
    
    render() {
        if(this.state==null){
            return <StyledDiv>null</StyledDiv>
        }else{
            // const v = Object.values(this.state) 
            // console.log(v)            
            return (
                <StyledDiv>
                    data
                    {/* {v.map(
                        (item)=>(<div key={item.id}>
                            <Shop {...item}/>
                            <hr/>                          
                            </div>)
                    )} */}
                </StyledDiv>
            )
        }
    }
}

export default Category

// const mapStateToProps = state => ({
// })
// const mapDispatchToProps = dispatch => ({
// })
// export default withRouter(connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Shops))
