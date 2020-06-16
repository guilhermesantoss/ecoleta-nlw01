import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Image, Text } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Select from 'react-native-picker-select';

import axios from 'axios';

import styles, { stylesSelect } from './styles';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home = () => {
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  
  const navigation = useNavigation();

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome').then(response => {
      const ufInicials = response.data.map(uf => uf.sigla);
      setUfs(ufInicials);
    });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      setSelectedCity('0');
      return;
    }

    axios
      .get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderBy=nome`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);
        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleNavigateToPoints() {
    if (selectedUf.length > 1 && selectedCity.length > 1) {
      const uf = selectedUf;
      const city = selectedCity;
      navigation.navigate('Points', {
        uf,
        city,
      });
    } else {
      return;
    }  
  }

  function handleSelectUf(value: string) {
    const uf = value;
    setSelectedUf(uf);
  }

  function handleSelectCity(value: string) {
    const city = value;
    setSelectedCity(city);
  }
  
  return (
    <ImageBackground 
      source={require('../../assets/home-background.png')} 
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos.</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
      </View>

      <View style={styles.footer}>
        <Select
          onValueChange={handleSelectUf}
          items={
            ufs.map(uf => ({
              label: uf,
              value: uf
            }))
          }
          placeholder={{ label: 'Selecione a UF', value: '0' }}
          value={selectedUf}
          style={stylesSelect}
          Icon={() => <Icon name="chevron-down" color="#999" size={24} />}
        />

        <Select
          onValueChange={handleSelectCity}
          items={
            cities.map(city => ({
              label: city,
              value: city
            }))
          }
          placeholder={{ label: 'Selecione a Cidade', value: '0' }}
          disabled={selectedUf === '0'}
          value={selectedCity}
          style={stylesSelect}
          Icon={() => <Icon name="chevron-down" color="#999" size={24} />}
        />

        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="arrow-right" color="#FFF" size={24} />
            </Text>
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
      </View>
    </ImageBackground>
    );
}

export default Home;