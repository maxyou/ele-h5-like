import React from 'react'
import styled from 'styled-components'
import Avatar from 'businesses/shops/avatar'
import { Link} from 'react-router-dom'

const StyledDiv = styled.div`
    /* background-color: #f0f0f0; */
    width: 100vw;
    /* width:100%; */
    height: 20vw;
    /* border: 1px dotted green; */
    margin-bottom: 2px;
    /* padding:10px; */
    /* margin: 0px; */
    overflow: hidden;
`
const StyledDivAvatar = styled.div`
    float: left;
    width: 15vw;
    height: 15vw;
    margin:1vw;
    /* background-color: #671234; */
    clear: left;
`
const StyledDivInfo = styled.div`
    float: left;
    width: 80vw;
    height: 30vw;
    margin:1vw;
    /* background-color: #126734; */

    .line1{
        display:flex;
        justify-content:space-between;
        .line1-1{
            font-size:200%;
            margin:3px;
        }
        .line1-2{
            font-size:80%;
            color: grey;
            margin: 5px;
        }
    }
    .line2{
        display:flex;
        justify-content:space-between;
        .line2-1{
            font-size:100%;
            color: #0000ff;
            margin:3px;
        }
        .line2-2{
            font-size:80%;
            margin:3px;
            color: #8888cc;
        }
    }
    .line3{
        display:flex;
        justify-content:space-between;
        .line3-1{
            font-size:80%;
            color: grey;
            margin:3px;
        }
        .line3-2{
            font-size:80%;
            color: grey;
            margin:3px;
        }
    }
    .line4{
        text-align: left;
    }
`
export default (props) => {

    console.log(props)

    return (
        <StyledDiv>
            <Link to={`/seles/${props.id}`}>
                <StyledDivAvatar>
                    <Avatar url={props.image_path}/>
                </StyledDivAvatar>
                <StyledDivInfo>
                    <div className="line1">
                        <div className="line1-1">{props.name}</div>
                        <div className="line1-2">{props.supports[0].name}</div>
                    </div>
                    <div className="line2">
                        <div className="line2-1">{props.category}</div>
                        <div className="line2-2">{props.supports[1].description}</div>
                    </div>
                    <div className="line3">
                        <div className="line3-1">tel:{props.phone}</div>
                        <div className="line3-2">{props.piecewise_agent_fee.tips}</div>
                    </div>
                    <div className="line4">
                        {props.address}
                    </div>
                </StyledDivInfo>
            </Link>
        </StyledDiv>
    )
  }