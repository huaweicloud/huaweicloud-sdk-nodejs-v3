import { CommRequestScenePageParam } from './CommRequestScenePageParam';


export class ShowSceneByPageRequest {
    private 'project_id'?: string;
    public body?: CommRequestScenePageParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowSceneByPageRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestScenePageParam): ShowSceneByPageRequest {
        this['body'] = body;
        return this;
    }
}