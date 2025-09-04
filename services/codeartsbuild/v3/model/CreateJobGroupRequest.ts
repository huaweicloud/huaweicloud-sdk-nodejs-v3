import { JobGroupRequestBody } from './JobGroupRequestBody';


export class CreateJobGroupRequest {
    private 'project_id'?: string;
    public body?: JobGroupRequestBody;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): CreateJobGroupRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: JobGroupRequestBody): CreateJobGroupRequest {
        this['body'] = body;
        return this;
    }
}