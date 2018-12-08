import React from 'react'
import styled from 'styled-components'

const StyledDivSlide = styled.div`    
    height: 200px;
    background-color:#d4c299;
`
export default ({slided}) => {

    return (
        <StyledDivSlide>
            {slided.map(
                (item)=>(<div key={item.id}>
                    <div>{item.title}</div>
                </div>)
            )}
        </StyledDivSlide>
    )
  }