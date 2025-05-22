import { BatchDeleteMembersV4RequestBody } from './BatchDeleteMembersV4RequestBody';


export class BatchDeleteMembersV4Request {
    private 'project_id'?: string;
    public body?: BatchDeleteMembersV4RequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): BatchDeleteMembersV4Request {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: BatchDeleteMembersV4RequestBody): BatchDeleteMembersV4Request {
        this['body'] = body;
        return this;
    }
}