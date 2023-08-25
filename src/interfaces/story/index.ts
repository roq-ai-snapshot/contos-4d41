import { FavoriteInterface } from 'interfaces/favorite';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StoryInterface {
  id?: string;
  title: string;
  content: string;
  category: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  favorite?: FavoriteInterface[];
  user?: UserInterface;
  _count?: {
    favorite?: number;
  };
}

export interface StoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  category?: string;
  user_id?: string;
}
