import { UserInterface } from 'interfaces/user';
import { StoryInterface } from 'interfaces/story';
import { GetQueryInterface } from 'interfaces';

export interface FavoriteInterface {
  id?: string;
  user_id: string;
  story_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  story?: StoryInterface;
  _count?: {};
}

export interface FavoriteGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  story_id?: string;
}
