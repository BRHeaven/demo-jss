import React from 'react'
import { connect } from 'react-redux';
import { Div, DivImage, DivTitle } from '../Jss/Div';
import { Image } from '../Jss/Img';
import { H2Title } from '../Jss/H2';
function Card(props) {
  let {id,name,src,src1,src2,type} = props.object;
  return (
    <Div className='divCard'>
      <DivImage>
        <Image src={src} alt={id}/>
      </DivImage>
      <DivTitle>
        <H2Title className={type}>{name}  </H2Title>
      </DivTitle>
    </Div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {

  };
};
export default connect(null,mapDispatchToProps)(Card);