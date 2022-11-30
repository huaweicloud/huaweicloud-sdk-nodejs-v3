import { ClearAccessLogRuleHitCountsDto } from './ClearAccessLogRuleHitCountsDto';


export class DeleteAclRuleCountRequest {
    private 'project_id': string | undefined;
    public body?: ClearAccessLogRuleHitCountsDto;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): DeleteAclRuleCountRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: ClearAccessLogRuleHitCountsDto): DeleteAclRuleCountRequest {
        this['body'] = body;
        return this;
    }
}