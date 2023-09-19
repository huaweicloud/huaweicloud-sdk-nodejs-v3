import { AddFavoriteReqTemplate } from './AddFavoriteReqTemplate';


export class AddFavoriteReq {
    public name?: string;
    public template?: AddFavoriteReqTemplate;
    public constructor(name?: string, template?: AddFavoriteReqTemplate) { 
        this['name'] = name;
        this['template'] = template;
    }
    public withName(name: string): AddFavoriteReq {
        this['name'] = name;
        return this;
    }
    public withTemplate(template: AddFavoriteReqTemplate): AddFavoriteReq {
        this['template'] = template;
        return this;
    }
}