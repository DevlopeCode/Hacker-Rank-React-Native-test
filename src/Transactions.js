import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TransactionItem from './TransactionItem';

const Transactions = ({transactions}) => {

    return (
        <FlatList
            initialNumToRender={100}
            keyExtractor={(item) => item.id.toString()}
            data={transactions}
            renderItem={({item})=> TransactionItem({transactions:item})}
        />
    )
}

export default Transactions;

const styles = StyleSheet.create({})

