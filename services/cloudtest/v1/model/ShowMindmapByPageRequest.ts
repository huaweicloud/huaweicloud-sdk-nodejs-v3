import { CommRequestMindmapPageParamV3 } from './CommRequestMindmapPageParamV3';


export class ShowMindmapByPageRequest {
    private 'project_id'?: string;
    public body?: CommRequestMindmapPageParamV3;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowMindmapByPageRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestMindmapPageParamV3): ShowMindmapByPageRequest {
        this['body'] = body;
        return this;
    }
}