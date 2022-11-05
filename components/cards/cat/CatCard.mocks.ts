import { ICatCard } from './CatCard';

const base: ICatCard = {
  tag: 'cat',
  title: `What's new in cats`,
  body: `Cats are the best`,
  author: `Thomas`,
  time: `2 days ago`,
};

export const mockCatCardProps = {
  base,
};
