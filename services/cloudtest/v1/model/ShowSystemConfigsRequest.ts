import { CommRequestSystemConfig } from './CommRequestSystemConfig';


export class ShowSystemConfigsRequest {
    private 'project_id'?: string;
    public body?: CommRequestSystemConfig;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowSystemConfigsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestSystemConfig): ShowSystemConfigsRequest {
        this['body'] = body;
        return this;
    }
}