import { ListRuleHitCountDto } from './ListRuleHitCountDto';


export class ListRuleHitCountRequest {
    private 'project_id': string | undefined;
    public body?: ListRuleHitCountDto;
    public constructor(projectId?: any) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ListRuleHitCountRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withBody(body: ListRuleHitCountDto): ListRuleHitCountRequest {
        this['body'] = body;
        return this;
    }
}