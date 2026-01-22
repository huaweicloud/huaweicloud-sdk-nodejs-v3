import { ImportRuleAclRequestBody } from './ImportRuleAclRequestBody';


export class ImportRuleAclRequest {
    private 'object_id'?: string;
    private 'project_id'?: string;
    public body?: ImportRuleAclRequestBody;
    public constructor(objectId?: string, projectId?: string) { 
        this['object_id'] = objectId;
        this['project_id'] = projectId;
    }
    public withObjectId(objectId: string): ImportRuleAclRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withProjectId(projectId: string): ImportRuleAclRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: ImportRuleAclRequestBody): ImportRuleAclRequest {
        this['body'] = body;
        return this;
    }
}