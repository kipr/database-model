import Selector from './Selector';
import Error from './Error';

namespace Create {
  export interface Request {
    selector: Selector;
  }

  export namespace Response {
    export interface Success<T = any> {
      type: 'success';
      value: T;
    }
  }

  export type Response<T = any> = Response.Success<T> | Error;
}

export default Create;


