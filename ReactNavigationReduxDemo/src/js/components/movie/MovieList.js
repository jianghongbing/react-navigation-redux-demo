import React, { Component } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    View,
} from 'react-native'
import { MovieItem } from './MovieItem'
import { MovieListEmpty } from './MovieListEmpty'
import {MovieListFooter} from './MovieListFooter'

export class MovieList extends Component {
  componentDidMount(){
    this.props.loadMovies()
  }

  render(){
    const {items, isReload, reloadMovies, loadMoreMovies} = this.props
    return (
        <SafeAreaView style={styles.container}>
          <FlatList
          data={items}
          renderItem={this._renderItem}
          keyExtractor={(item)=>item.id}
          initialNumToRender={20}
          ItemSeparatorComponent={this._renderSeparator}
          ListEmptyComponent={this._renderEmptyComponent.bind(this)}
          ListFooterComponent={this._renderFooter.bind(this)}
          refreshing={isReload}
          onRefresh={reloadMovies}
          onEndReached={loadMoreMovies}
          onEndReachedThreshold={0.001}
          />
        </SafeAreaView>
    )
  }

  _renderItem({item}){
    return (<MovieItem {...item}/>)
  }
  _renderSeparator(){
    return (<View style={styles.separator}/>)
  }
  _renderEmptyComponent(){
    const {isLoading, error} = this.props
    return (<MovieListEmpty isLoading={isLoading} error={error}/>)
  }
  _renderFooter(){
    const {didLoadAllMovies} = this.props
    return (<MovieListFooter didLoadAllMovies={didLoadAllMovies}/>)
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#999',
  }
})

MovieList.navigationOptions = {
  title: 'Top250',
  headerTitleStyle: {
    color: '#666',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
}