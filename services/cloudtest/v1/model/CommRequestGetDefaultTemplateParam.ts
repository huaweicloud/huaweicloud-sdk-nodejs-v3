import { GetDefaultTemplateParam } from './GetDefaultTemplateParam';


export class CommRequestGetDefaultTemplateParam {
    public params?: GetDefaultTemplateParam;
    public constructor() { 
    }
    public withParams(params: GetDefaultTemplateParam): CommRequestGetDefaultTemplateParam {
        this['params'] = params;
        return this;
    }
}