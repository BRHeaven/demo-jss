import React from 'react';
import { connect } from 'react-redux';
import { Section } from '../Jss/Section';
import { Div } from '../Jss/Div';
import Card from './Card';
function Home(props) {
  const renderCard = () => {
    return props.data.dataObject.map((object, index) => {
      return <Card object={object} key={index}/>
    });
  };
  return (
    <Section>
      <Div className='divMain'>
        {renderCard()}
      </Div>
    </Section>
  );
};
const mapStateToProps = state => {
  return {
    data : state.dataReducer,
  };
};
export default connect(mapStateToProps, null)(Home);