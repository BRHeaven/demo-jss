import React from 'react'
import { connect } from 'react-redux';
import { DivButton, DivCard, DivImage, DivTitle } from '../Jss/Div';
import { Image } from '../Jss/Img';
import { H2Title } from '../Jss/H2';
import { ButtonSelect } from '../Jss/Button';
import { srcChange } from '../Redux/Actions/reduxActions';
function Card(props) {
  console.log(true);
  let {id,name,src,type} = props.object;
  return (
    <DivCard>
      <DivImage>
        <Image src={src} alt={id}/>
      </DivImage>
      <DivTitle>
        <H2Title className={type}>{name}  </H2Title>
      </DivTitle>
      <DivButton>
        <ButtonSelect onClick={()=>{props.selectImage(1,id)}} primary={type}>
            image
        </ButtonSelect>
        <ButtonSelect onClick={()=>{props.selectImage(2,id)}} primary={type}>
            image
        </ButtonSelect>
        <ButtonSelect onClick={()=>{props.selectImage(3,id)}} primary={type}>
            image
        </ButtonSelect>
      </DivButton>
    </DivCard>
  );
};
const mapStateToProps = state => {
  return {
    data : state.dataReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    selectImage: (number,id) => {
      dispatch(srcChange(number,id))
    },
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Card);