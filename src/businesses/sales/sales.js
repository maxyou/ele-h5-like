import React from 'react'
import axios from 'axios'

class sales extends React.Component {

    constructor(props){
        super(props)

        // this.state = null
        
    }

    httpUpdate(){

        // console.log(this.props)

        axios.get('/shopping/v2/menu?restaurant_id='+this.props.match.params.id)
        // axios.get('/shopping/v2/menu',{
        //     params:{
        //         restaurant_id: this.props.id
        //     }
        // })
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
        for(let i=0;i<50;i++){
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

        if(this.state){

            return (<div>

                {
                    this.state.foods0.map((item)=><div key={item.id}>{item.foods.name}:{item.id}</div>)
                }
                {
                    this.state.foods1.map((item)=><div key={item.id}>{item.foods.name}:{item.id}</div>)
                }

            </div>)


        }else{
            return <div>no data</div>
        }
    }
}

export default sales