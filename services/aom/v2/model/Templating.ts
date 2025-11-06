import { TemplateInfo } from './TemplateInfo';


export class Templating {
    public list?: Array<TemplateInfo>;
    public constructor() { 
    }
    public withList(list: Array<TemplateInfo>): Templating {
        this['list'] = list;
        return this;
    }
}