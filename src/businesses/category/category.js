import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Shop from 'businesses/shops/shop'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const StyledDiv = styled.div`    
    width: 100%;
    height: 230px;
    background-color:#d47239;
`
const StyledDivSlide = styled.div`    
    height: 200px;
    background-color:#d4c299;
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
                        <StyledDivSlide>1</StyledDivSlide>
                        <StyledDivSlide>2</StyledDivSlide>
                        <StyledDivSlide>3</StyledDivSlide>
                        <StyledDivSlide>4</StyledDivSlide>

                    </Slider>
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
