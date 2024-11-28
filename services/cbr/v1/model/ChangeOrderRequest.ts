import { CbcOrderChange } from './CbcOrderChange';


export class ChangeOrderRequest {
    public body?: CbcOrderChange;
    public constructor() { 
    }
    public withBody(body: CbcOrderChange): ChangeOrderRequest {
        this['body'] = body;
        return this;
    }
}