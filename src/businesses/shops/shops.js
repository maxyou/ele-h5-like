import React from 'react'
import axios from 'axios'
import Shop from '@/businesses/shops/shop'
import ShopsData from '@/resources/shops'

// const StyledDiv = styled.div`    
// `
import MockAdapter from 'axios-mock-adapter'

var http = axios.create()

var mock = new MockAdapter(http)
mock.onGet('/shopping/restaurants').reply(200,
    ShopsData
    // [
    //     { id:1, name:"烤肉拌饭", image_url:"shops_1" },
    //     { id:2, name:"贡菜", image_url:"shops_2" },
    //     { id:3, name:"吉野家", image_url:"shops_3" },
    //     { id:4, name:"麦当劳", image_url:"shops_4" },
    //     { id:5, name:"田老师", image_url:"shops_5" },
    //     { id:6, name:"南城香", image_url:"shops_6" },
    //     { id:7, name:"烤肉拌饭", image_url:"shops_1" },
    //     { id:8, name:"贡菜", image_url:"shops_2" },
    //     { id:9, name:"吉野家", image_url:"shops_3" },
    //     { id:10, name:"麦当劳", image_url:"shops_4" },
    //     { id:11, name:"田老师", image_url:"shops_5" },
    //     { id:12, name:"南城香", image_url:"shops_6" },
    //     { id:13, name:"烤肉拌饭", image_url:"shops_1" },
    //     { id:14, name:"贡菜", image_url:"shops_2" },
    //     { id:15, name:"吉野家", image_url:"shops_3" },
    //     { id:16, name:"麦当劳", image_url:"shops_4" },
    //     { id:17, name:"田老师", image_url:"shops_5" },
    //     { id:18, name:"南城香", image_url:"shops_6" },
    // ]
    )
class Shops extends React.Component {

    constructor(props){
        super(props)
        // this.state = null        
    }

    httpUpdate(){
        http.get('/shopping/restaurants',{
            params:{
                latitude: 31.38098,
                longitude: 121.50146
            }
        })
            .then(res=>{
                if(res.status===200){
                    // console.log('axios 200')
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
                            <Shop item={item}/>                            
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
