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

        // this.state = null
        
    }

    componentDidMount() {

    }
    
    render() {
        return <StyledDiv>
                <img className="cart" src={cartSvg} alt=''  />
                <div className="price">1</div>
                <div className="place">2</div>
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
