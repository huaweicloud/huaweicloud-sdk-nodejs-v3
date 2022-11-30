import { AddRuleAclDto } from './AddRuleAclDto';


export class AddRuleAclUsingPostRequest {
    private 'project_id': string | undefined;
    public body?: AddRuleAclDto;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): AddRuleAclUsingPostRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: AddRuleAclDto): AddRuleAclUsingPostRequest {
        this['body'] = body;
        return this;
    }
}