import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'

const StyledDiv = styled.div`    
`

class Shops extends React.Component {

    constructor(props){
        super(props)

        this.state = []
        
    }

    httpUpdate(){
        axios.get('/shopping/restaurants')
            .then(res=>{
                if(res.status===200){
                    console.log('axios 200')
                    console.log(res)
                }
                // console.log(res)
            })
    }

    componentDidMount() {
        this.httpUpdate()
    }
    
    render() {
        // console.log(this.props)
        return (
            <div>
                <StyledDiv>
                    
                    {JSON.stringify(this.state)}
                </StyledDiv>
            </div>
        )
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
