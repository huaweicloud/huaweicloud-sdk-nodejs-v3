import { Template } from './Template';


export class PluginSpec {
    public template?: Template;
    public constructor(template?: Template) { 
        this['template'] = template;
    }
    public withTemplate(template: Template): PluginSpec {
        this['template'] = template;
        return this;
    }
}