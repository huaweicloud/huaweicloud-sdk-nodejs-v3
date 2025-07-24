import { TestPointPageParam } from './TestPointPageParam';


export class CommRequestTestPointPageParam {
    public params?: TestPointPageParam;
    public constructor() { 
    }
    public withParams(params: TestPointPageParam): CommRequestTestPointPageParam {
        this['params'] = params;
        return this;
    }
}