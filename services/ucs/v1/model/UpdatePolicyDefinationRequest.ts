import { UCSConstraintTemplateTagRequest } from './UCSConstraintTemplateTagRequest';


export class UpdatePolicyDefinationRequest {
    public policydefinitionid?: string;
    public body?: UCSConstraintTemplateTagRequest;
    public constructor(policydefinitionid?: string) { 
        this['policydefinitionid'] = policydefinitionid;
    }
    public withPolicydefinitionid(policydefinitionid: string): UpdatePolicyDefinationRequest {
        this['policydefinitionid'] = policydefinitionid;
        return this;
    }
    public withBody(body: UCSConstraintTemplateTagRequest): UpdatePolicyDefinationRequest {
        this['body'] = body;
        return this;
    }
}