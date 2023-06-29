import { TransTemplateGroup } from './TransTemplateGroup';


export class CreateTemplateGroupRequest {
    public body?: TransTemplateGroup;
    public constructor() { 
    }
    public withBody(body: TransTemplateGroup): CreateTemplateGroupRequest {
        this['body'] = body;
        return this;
    }
}