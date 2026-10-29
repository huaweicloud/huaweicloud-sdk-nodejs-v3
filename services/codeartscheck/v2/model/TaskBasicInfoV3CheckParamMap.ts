

export class TaskBasicInfoV3CheckParamMap {
    public param1?: string;
    public param2?: string;
    public constructor() { 
    }
    public withParam1(param1: string): TaskBasicInfoV3CheckParamMap {
        this['param1'] = param1;
        return this;
    }
    public withParam2(param2: string): TaskBasicInfoV3CheckParamMap {
        this['param2'] = param2;
        return this;
    }
}