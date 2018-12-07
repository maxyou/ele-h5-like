import React, {Fragment} from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: #f267d4;
    width: 100%;
    margin: 2px;
    /* overflow: hidden; */
`
const StyledDivAvatar = styled.div`
    float: left;
    width: 19%;
    height: 18vw;
    margin: 0.5%;
    background-color: #671234;
    clear: left;
`
const StyledDivInfo = styled.div`
    float: left;
    width: 79%;
    height: 180px;
    margin: 0.5%;
    background-color: #126734;
`
export default (props) => {

    return (
        <StyledDiv>
            <StyledDivAvatar>
            </StyledDivAvatar>
            <StyledDivInfo>
                {props.id}<br/>
                {props.name}<br/>
                {props.address}<br/>
            </StyledDivInfo>
        </StyledDiv>
    )
  }