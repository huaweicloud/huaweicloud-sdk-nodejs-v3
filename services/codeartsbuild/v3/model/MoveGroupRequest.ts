import { MoveJobGroupRequestBody } from './MoveJobGroupRequestBody';


export class MoveGroupRequest {
    private 'project_id'?: string;
    public body?: MoveJobGroupRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): MoveGroupRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: MoveJobGroupRequestBody): MoveGroupRequest {
        this['body'] = body;
        return this;
    }
}