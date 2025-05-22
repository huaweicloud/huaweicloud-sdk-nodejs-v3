import { BatchAddMembersV4RequestBody } from './BatchAddMembersV4RequestBody';


export class BatchAddMembersV4Request {
    private 'project_id'?: string;
    public body?: BatchAddMembersV4RequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchAddMembersV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchAddMembersV4RequestBody): BatchAddMembersV4Request {
        this['body'] = body;
        return this;
    }
}