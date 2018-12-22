import React from 'react'
import styled from 'styled-components'
import cartSvg from 'businesses/order/iconfont/cart.svg'

const StyledDiv = styled.div`    

    background-color:#71c99f;
    /* height: 100%; */
    /* height: 80px; */
    height: ${props=>props.cartHeight}px;

    display:flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;

    img{
        width: 30px;
        height: 30px;
    }
    /* .num{
        background-color:#11c97f;
    }
    .price{
        background-color:#1199ff;
    }
    .place{
        background-color:#61994f;
    } */

`

class Cart extends React.Component {

    constructor(props){
        super(props)

        // this.state.num = 0
        
    }

    componentDidMount() {

    }
    
    render() {
        // console.log('-----cart props')
        // console.log(this.props)

        let num = 0
        let price = 0
        this.props.hotsales.map((item)=>{
            if(item.pickCount){
                num+=item.pickCount
                price+=(item.price*item.pickCount)
            }
        })
        this.props.discounted.map((item)=>{
            if(item.pickCount){
                num+=item.pickCount
                price+=(item.price*item.pickCount)
            }
        })

        return <StyledDiv {...this.props}>
                <img className="cart" src={cartSvg} alt=''  />
                <div className="num">
                    总计{num}件商品
                </div>
                <div className="price">
                    总价{price}元
                </div>
                <div className="place">去结算</div>
            </StyledDiv>
    }
}

export default Cart

// const mapStateToProps = state => ({
// })
// const mapDispatchToProps = dispatch => ({
// })
// export default withRouter(connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Shops))
