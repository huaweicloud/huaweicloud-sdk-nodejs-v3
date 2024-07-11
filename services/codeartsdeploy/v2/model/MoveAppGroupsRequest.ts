import { MoveAppGroupsRequestBody } from './MoveAppGroupsRequestBody';


export class MoveAppGroupsRequest {
    private 'project_id'?: string;
    public body?: MoveAppGroupsRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): MoveAppGroupsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: MoveAppGroupsRequestBody): MoveAppGroupsRequest {
        this['body'] = body;
        return this;
    }
}