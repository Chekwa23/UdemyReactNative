import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import useResult from '../hooks/useResults'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'

export default function SearchScreen() {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorText] = useResult();

    const filterByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View style={{flex: 1}}>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorText && <Text>{errorText}</Text>}
            <ScrollView>
                <ResultsList results={filterByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterByPrice('$$')} title="Bit Pricier"/>
                <ResultsList results={filterByPrice('$$$')} title="Big Spender"/>
                <ResultsList results={filterByPrice('$$$$')} title="Cash Money"/>
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    
})
