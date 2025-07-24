import { TestCasePageParam } from './TestCasePageParam';


export class CommRequestTestCasePageParam {
    public params?: TestCasePageParam;
    public constructor(params?: TestCasePageParam) { 
        this['params'] = params;
    }
    public withParams(params: TestCasePageParam): CommRequestTestCasePageParam {
        this['params'] = params;
        return this;
    }
}