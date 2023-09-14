import { TemplateCddl } from './TemplateCddl';


export class CreatePipelineByTemplateRequest {
    public body?: TemplateCddl;
    public constructor() { 
    }
    public withBody(body: TemplateCddl): CreatePipelineByTemplateRequest {
        this['body'] = body;
        return this;
    }
}