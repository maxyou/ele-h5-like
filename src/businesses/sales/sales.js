import React from 'react'
import axios from 'axios'

class sales extends React.Component {

    constructor(props){
        super(props)

        // this.state = null
        
    }

    httpUpdate(){

        console.log(this.props)

        axios.get('/shopping/v2/menu?restaurant_id='+this.props.match.params.id)
        // axios.get('/shopping/v2/menu',{
        //     params:{
        //         restaurant_id: this.props.id
        //     }
        // })
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
        
            return <div>no data</div>
    }
}

export default sales