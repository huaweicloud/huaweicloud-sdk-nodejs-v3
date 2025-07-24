import { SaveTemplateParam } from './SaveTemplateParam';


export class CommRequestSaveTemplateParam {
    public params?: SaveTemplateParam;
    public constructor() { 
    }
    public withParams(params: SaveTemplateParam): CommRequestSaveTemplateParam {
        this['params'] = params;
        return this;
    }
}