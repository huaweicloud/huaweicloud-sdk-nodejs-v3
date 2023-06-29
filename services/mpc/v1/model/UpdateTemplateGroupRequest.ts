import { ModifyTransTemplateGroup } from './ModifyTransTemplateGroup';


export class UpdateTemplateGroupRequest {
    public body?: ModifyTransTemplateGroup;
    public constructor() { 
    }
    public withBody(body: ModifyTransTemplateGroup): UpdateTemplateGroupRequest {
        this['body'] = body;
        return this;
    }
}