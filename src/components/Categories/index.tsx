import { Text } from '../Text';
import { FlatList } from 'react-native';
import { Icon, Category } from './styles';
// import { SiBurgerking } from 'react-icons/si';
// import { GiBottleCap } from 'react-icons/gi';
// import { VscTag } from 'react-icons/vsc';
// import { CiPizza } from 'react-icons/ci';
import { useState } from 'react';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('');
  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      data={categories}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;
        return (
          <Category onPress={() => alert('press')}>
            <Icon>
              <Text opacity={isSelected ? 1 : 0.5}>
                {category.icon}
                {/* {category.icon === '🍔' && <SiBurgerking />}
                {category.icon === '📌' && <VscTag />}
                {category.icon === '🥤' && <GiBottleCap />}
                {category.icon === '🍕' && <CiPizza />} */}
              </Text>
            </Icon>
            <Text size={14} weight="600" opacity={isSelected ? 1 : 0.5}>
              {category.name}
            </Text>
          </Category>
        );
      }}
    />
  );
}
