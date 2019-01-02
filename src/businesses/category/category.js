import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SlideView from '@/businesses/category/slideview'

const StyledDiv = styled.div`    
    width: 100vw;
    height: 230px;
    background-color:#ccccff;
    /* border: 1px dotted red; */
`

class Category extends React.Component {

    constructor(props){
        super(props)

    }

    httpUpdate(){
        axios.get('/v2/index_entry')
            .then(res=>{
                if(res.status===200){
                    // console.log('axios 200')
                    // console.log(res)
                    let a = []
                    for(var i = 0; i < res.data.length; i++){
                        let aa = parseInt(i/6)
                        if(!a[aa]){
                            a[aa] = []
                        }
                        a[aa].push(res.data[i])
                    }
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
