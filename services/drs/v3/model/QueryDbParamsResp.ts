import { Params } from './Params';


export class QueryDbParamsResp {
    public params?: Array<Params>;
    public constructor() { 
    }
    public withParams(params: Array<Params>): QueryDbParamsResp {
        this['params'] = params;
        return this;
    }
}