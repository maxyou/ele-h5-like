import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Avatar from '@/businesses/shops/avatar'
import ShopsData from '@/resources/shops'
import calc from '@/tool/calc'
import ReactStars from "react-rating-stars-component"

const StyledDivBack = styled.div`
    position: absolute;
`
const StyledDiv = styled.div`    
    display:flex;
    flex-direction:column;
    align-items:stretch;

    .line-1{
        margin-left:80px;
        display:flex;        
        background-color:red;
        .line-1-1{
            background-color:brown;
            margin-left:50px;
            display:flex;
            flex-direction:column;
            .line-1-1-1{
                background-color:blue;
                font-size:200%;
                margin:3px;
                color:black;
            }
            .line-1-1-2{
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:80%;
                color: grey;
                margin-left: 15px;
                margin-right: 15px;
                margin-top: 5px;
                padding:5px;
                background-color:gold;
                border-radius:5px;
            }
            .line-1-1-3{
                display:flex;                
                align-items:center;
                margin-top: 5px;
                .line-1-1-3-1{
                    display:flex;
                    align-items:center;
                }
                .line-1-1-3-2{
                    display:flex;
                    align-items:center;
                    margin-left:10px;
                }
            }
        }
    }
    .line-2{
        background-color:tomato;
        display:flex;
        flex-direction:column;
        align-items:center;
        .line-2-1{
            background-color:lightblue;
            display:flex;
            font-size:120%;
            color: grey;
            margin:3px;
            .line-2-1-1{
                
            }
            .line-2-1-2{
                margin-left:30px;
            }
        }
        .line-2-2{
            display:flex;
            flex-direction:column;
            .line-2-2-1{
                display:flex;
                .line-2-2-1-1{
                    margin-right:5px;
                    padding: 3px;
                    background-color:orange;
                    border-radius:2px;
                    color: white;
                }
            }
            .line-2-2-2{
                display:flex;
                .line-2-2-2-1{
                    margin-right:5px;
                    padding: 3px;
                    background-color:lightgreen;
                    border-radius:2px;
                    color: white;
                }
            }
        }
    }
`
const StyledDivAvatar = styled.div`    
    width: 100px;
    height: 100px;
    margin:10px;
    padding:1px;
    border: 1px solid #dddddd;
    border-radius: 5px;
`

const StyledDivInfo = styled.div`
    height: 180px;
    padding-left:20px;
    padding-right:20px;    
    background-color:yellow;
    
    .line3{
        display:flex;
        justify-content:space-between;
        .line3-1{
            font-size:120%;
            color: grey;
            margin:3px;
        }
        .line3-2{
            font-size:100%;
            color: grey;
            margin:3px;
            margin-right:15px;
        }
        .line3-3{
            margin-left:5px;
            margin-right:5px;
        }
    }
    .line45{
        display:flex;
        .line4{
            display:flex;
            color: grey;
            .line4-1{
                margin-right:5px;
                padding: 3px;
                background-color:orange;
                border-radius:2px;
                color: white;
            }
        }
        .line5{
            display:flex;
            color: grey;
            margin-top:5px;
            .line5-1{
                margin-right:5px;
                padding: 3px;
                background-color:lightgreen;
                border-radius:2px;
                color: white;
            }
        }
    }
    .line-interval{
        height:1px;
        margin-top:15px;
        margin-bottom:15px;
        background-color:#dddddd;
    }
`
class ShopDetail extends React.Component {

    constructor(props) {
        super(props)

        // this.state = null

    }


    httpUpdate() {
        // axios.get('/shopping/restaurant/'+this.props.match.params.id)
        //     .then(res=>{
        //         if(res.status===200){
        //             console.log('axios 200 shop detail')
        //             // console.log(JSON.stringify(res))
        //             // console.log(res)

        //             this.setState({...res.data})
        //         }
        //         // console.log(res)
        //     })

        // ShopsData.find()
        console.log(ShopsData)
        var item
        ShopsData.forEach(v => {
            if (v.id == this.props.match.params.id) {
                console.log('find item')
                item = v
            }
        });
        if (item != null) {
            this.setState({ ...item })
        }
    }

    componentDidMount() {
        this.httpUpdate()
    }

    render() {

        // console.log(this.state)
        if (this.state) {
            return (
                <div>
                    <StyledDivBack>B</StyledDivBack>
                    {/* <StyledShopDetail>
                        <StyledDivAvatar>
                            <Avatar url={this.state.image_url} />
                        </StyledDivAvatar>
                        <div>{this.state.name}</div>                        
                        <div className="line2-2">月售{calc.getRandomInt(1, 100)}单</div>
                    </StyledShopDetail> */}
                    <StyledDiv>
                        <div className="line-1">
                            <StyledDivAvatar>
                                <Avatar url={this.state.image_url} />
                            </StyledDivAvatar>
                            <div className="line-1-1">
                                <div className="line-1-1-1">{this.state.name}</div>
                                <div className="line-1-1-2"><span>金牌保证</span></div>
                                <div className="line-1-1-3">
                                    <div className="line-1-1-3-1">
                                        <ReactStars count={5} value={calc.getRandomInt(1, 5)} edit={false} size={24} color2={"#ffd700"} />
                                    </div>
                                    <div className="line-1-1-3-2">月售{calc.getRandomInt(1, 100)}单</div>
                                </div>
                            </div>
                        </div>
                        <div className="line-2">
                            <div className="line-2-1">
                                <div className="line-2-1-1"><span>￥{calc.getRandomInt(1, 100)}起配送</span><span className="line3-3">|</span><span>免费配送</span></div>
                                <div className="line-2-1-2"><span>距离{calc.getRandomInt(1, 5)}公里</span><span className="line3-3">|</span><span>大约{calc.getRandomInt(1, 50)}分钟</span></div>
                            </div>
                            <div className="line-interval"></div>
                            <div className="line-2-2">
                                <div className="line-2-2-1">
                                    <div className="line-2-2-1-1"><span>减</span></div>
                                    <div className="line-2-2-1-2"><span>满{calc.getRandomInt(50, 100)}元减{calc.getRandomInt(10, 20)}元</span></div>
                                </div>
                                <div className="line-2-2-2">
                                    <div className="line-2-2-2-1"><span>配</span></div>
                                    <div className="line-2-2-2-2"><span>商品金额满{calc.getRandomInt(70, 100)}元，配送费减{calc.getRandomInt(5, 10)}元</span></div>
                                </div>
                            </div>
                        </div>
                    </StyledDiv>
                </div>
            )
        } else {
            return <div>no data</div>
        }
    }
}

export default ShopDetail
