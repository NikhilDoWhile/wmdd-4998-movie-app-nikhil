import React from 'react'
import DetailsScreenContainer from '../appContainer/DetailsScreenContainer'

const DetailsScreen = ({navigation, route }) => {
  return (
    <DetailsScreenContainer route={route} navigation={navigation}/>
  )
}

export default DetailsScreen

