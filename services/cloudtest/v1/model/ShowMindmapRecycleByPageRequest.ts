import { CommRequestMindmapRecyclePageParam } from './CommRequestMindmapRecyclePageParam';


export class ShowMindmapRecycleByPageRequest {
    private 'project_id'?: string;
    public body?: CommRequestMindmapRecyclePageParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowMindmapRecycleByPageRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestMindmapRecyclePageParam): ShowMindmapRecycleByPageRequest {
        this['body'] = body;
        return this;
    }
}