import React from 'react';
import { FlatList } from 'react-native';
import type { IPost } from '../../types/models';
import FeedGridItem from './FeedGridItem';

interface FeedGridViewProps {
  data: IPost[];
  ListHeaderComponent?: React.ComponentType<any> | undefined;
}

const FeedGridView = ({ data, ListHeaderComponent }: FeedGridViewProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <FeedGridItem key={item.id} post={item} />} // {item, index}
      showsVerticalScrollIndicator={false}
      numColumns={3}
      ListHeaderComponent={ListHeaderComponent}
      style={{ marginHorizontal: -1 }}
    />
  );
};

export default FeedGridView;