import { ListFactorParam } from './ListFactorParam';


export class CommRequestListFactorParam {
    public params?: ListFactorParam;
    public constructor(params?: ListFactorParam) { 
        this['params'] = params;
    }
    public withParams(params: ListFactorParam): CommRequestListFactorParam {
        this['params'] = params;
        return this;
    }
}