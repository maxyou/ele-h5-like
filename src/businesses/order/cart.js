import React from 'react'
import styled from 'styled-components'
import cartSvg from 'businesses/order/iconfont/cart.svg'

const StyledDiv = styled.div`    

    background-color:#11c95f;
    height: 100%;

    display:flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;

    img{
        width: 30px;
        height: 30px;
    }
    .num{
        background-color:#11c97f;
    }
    .price{
        background-color:#1199ff;
    }
    .place{
        background-color:#61994f;
    }

`

class Cart extends React.Component {

    constructor(props){
        super(props)

        // this.state.num = 0
        
    }

    componentDidMount() {

    }
    
    render() {
        console.log(this.props)

        let num = 0
        this.props.hotsales.map((item)=>{
            if(item.pickCount){
                num+=item.pickCount
            }
        })
        this.props.discounted.map((item)=>{
            if(item.pickCount){
                num+=item.pickCount
            }
        })

        return <StyledDiv>
                <img className="cart" src={cartSvg} alt=''  />
                <div className="num">
                    total num:{num}
                </div>
                <div className="price">
                    total price
                </div>
                <div className="place">goto place</div>
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
