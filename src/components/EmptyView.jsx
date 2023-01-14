import React from 'react';

import styled from 'styled-components';
const EmptyView = () => (
  <Containern>
  <div className='emptyView-wrap'>
    <img src='/images/empty.gif' alt='' />
  </div>
  </Containern>
);

export default EmptyView;
const Containern=styled.div`
.emptyView-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.emptyView-wrap img {
  max-width: 500px;
  width: 100%;
}

`;