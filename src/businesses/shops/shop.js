import React, {Fragment} from 'react'
import styled from 'styled-components'
import Avatar from 'businesses/shops/avatar'

const StyledDiv = styled.div`
    background-color: #f267d4;
    width: 100vw;
    margin-bottom: 2px;
    overflow: hidden;
`
const StyledDivAvatar = styled.div`
    float: left;
    width: 18vw;
    height: 18vw;
    margin:1vw;
    background-color: #671234;
    clear: left;
`
const StyledDivInfo = styled.div`
    float: left;
    width: 80vw;
    height: 30vw;
    background-color: #126734;
`
export default (props) => {

    console.log(props.image_path)
    return (
        <StyledDiv>
            <StyledDivAvatar>
                <Avatar url={props.image_path}/>
            </StyledDivAvatar>
            <StyledDivInfo>
                {props.id}<br/>
                {props.name}<br/>
                {props.address}<br/>
            </StyledDivInfo>
        </StyledDiv>
    )
  }