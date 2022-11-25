import { Text } from '../Text';
import { FlatList } from 'react-native';
import { Icon, CategoryContainer } from './styles';
import { Category } from '../../types/Category';
import { SiBurgerking } from 'react-icons/si';
import { GiBottleCap } from 'react-icons/gi';
import { VscTag } from 'react-icons/vsc';
import { CiPizza } from 'react-icons/ci';
import { useState } from 'react';

type CategoriesProps = {
  categories: Category[];
  onSelectCategory: (categoryId: string) => Promise<void>;
};

export function Categories({ categories, onSelectCategory }: CategoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
    onSelectCategory(category);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(category) => category._id}
      renderItem={({ item: category }) => {
        const isSelected = selectedCategory === category._id;
        return (
          <CategoryContainer onPress={() => handleSelectCategory(category._id)}>
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
          </CategoryContainer>
        );
      }}
    />
  );
}
