import { CommRequestTestPointPageParam } from './CommRequestTestPointPageParam';


export class ShowTestpointByPageRequest {
    private 'project_id'?: string;
    public body?: CommRequestTestPointPageParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowTestpointByPageRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestTestPointPageParam): ShowTestpointByPageRequest {
        this['body'] = body;
        return this;
    }
}