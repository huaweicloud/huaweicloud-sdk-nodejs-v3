import { TemplatePageParam } from './TemplatePageParam';


export class CommRequestTemplatePageParam {
    public params?: TemplatePageParam;
    public constructor() { 
    }
    public withParams(params: TemplatePageParam): CommRequestTemplatePageParam {
        this['params'] = params;
        return this;
    }
}