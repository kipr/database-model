import Selector from './Selector';

export interface CreateRequest<T = any> {
  selector: Selector;
  value: T;
}