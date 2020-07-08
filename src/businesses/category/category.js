import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlideView from '@/businesses/category/slideview'
import MockAdapter from 'axios-mock-adapter'

var http = axios.create()

var mock = new MockAdapter(http)
mock.onGet('/v2/index_entry').reply(200,
    [
        { id:0, title:"包子粥店", image_url:"category_bao" },
        { id:1, title:"川湘菜", image_url:"category_chuan" },
        { id:2, title:"果蔬生鲜", image_url:"category_guo" },
        { id:3, title:"汉堡薯条", image_url:"category_han" },
        { id:4, title:"简餐", image_url:"category_jian" },
        { id:5, title:"麻辣烫", image_url:"category_ma" },
        { id:6, title:"美食", image_url:"category_mei" },
        { id:7, title:"披萨意面", image_url:"category_pi" },
        { id:8, title:"日韩料理", image_url:"category_ri" },
        { id:9, title:"商超便利", image_url:"category_shang" },
        { id:10, title:"甜品饮品", image_url:"category_tian" },
        { id:11, title:"土豪餐", image_url:"category_tu" },
        { id:12, title:"鲜花蛋糕", image_url:"category_xian" },
        { id:13, title:"新店特惠", image_url:"category_xin" },
        { id:14, title:"预定早餐", image_url:"category_yu" },
        { id:15, title:"准时达", image_url:"category_zhun" },
    ])

const StyledDiv = styled.div`    
    width: 100vw;
    height: 230px;
    background-color:white;    
    `

class Category extends React.Component {

    constructor(props){
        super(props)

    }

    httpUpdate(){
        http.get('/v2/index_entry')
            .then(res=>{
                if(res.status===200){
                    // console.log('axios 200')
                    console.log(res)
                    let a = []
                    for(var i = 0; i < res.data.length; i++){
                        let aa = parseInt(i/6)
                        if(!a[aa]){
                            a[aa] = []
                        }
                        a[aa].push(res.data[i])
                    }
                    console.log(a)
                    this.setState({category:a})
                }
                // console.log(res)
            })
    }

    componentDidMount() {
        this.httpUpdate()
    }
    
    render() {
        if(this.state && this.state.category){

            // console.log(this.state.category)

            const settings = {
                dots: true,
                ininite: true,
                speed: 500,
                slidesToShow:1,
                slidesToScroll:1
            }
            return (
                <StyledDiv>
                    <Slider {...settings}>
                        {this.state.category.map((item, index)=>(
                            <SlideView key={index} slided={item}>
                            </SlideView>
                        ))}
                    </Slider>
                </StyledDiv>
            )
        }else{
            return <StyledDiv>null</StyledDiv>
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
