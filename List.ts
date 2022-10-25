import Selector from './Selector';
import Error from './Error';
import Author from './Author';
import Brief from './Brief';

namespace List {
  export interface Request<T = any> {
    author: Author;
    collection: string;
  }

  export namespace Response {
    export interface Success {
      type: 'success';
      values: { [id: string]: Brief | null };
    }
  }

  export type Response = Response.Success | Error;
}

export default List;


