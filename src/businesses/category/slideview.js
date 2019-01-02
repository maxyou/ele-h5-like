import React from 'react'
import styled from 'styled-components'
import IconCategory from '@/businesses/category/icon'

const slideHeight = '200px'
const itemHeight = '90px'
const itemWidth = '30%'
const imgWidth = '60px'
const imgHeight = '60px'
const titleWidth = '160px'
const titleHeight = '15px'

const StyledDivSlide = styled.div`    
    height: ${slideHeight};
    /* background-color:#7432c9; */
    display: flex;
    flex-wrap: wrap;
`
const StyledDivItem = styled.div`    
    height: ${itemHeight};
    width:${itemWidth};
    /* border: 1px solid green; */
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;

    .pic{
        /* border: 2px solid red; */
        display: block;
        /* background-color:#f43299; */
        flex: 1 1 0;
    }
    .title{
        /* border: 2px solid yellow; */
        /* background-color:#c432c9; */
        width:${titleWidth};
        height:${titleHeight};
        flex: 1 1 0;
    }
`
export default ({slided}) => {

    return (
        <StyledDivSlide>
            {slided.map(
                (item)=>(<StyledDivItem key={item.id}>                    
                    <div className="pic">
                        <IconCategory w={imgWidth} h={imgHeight} url={item.image_url}/>
                    </div>
                    <div className="title">{item.title}</div>
                </StyledDivItem>)
            )}
        </StyledDivSlide>
    )
  }