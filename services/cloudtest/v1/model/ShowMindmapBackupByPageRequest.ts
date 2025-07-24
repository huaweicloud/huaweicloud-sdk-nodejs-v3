import { CommRequestMindmapBackupPageParam } from './CommRequestMindmapBackupPageParam';


export class ShowMindmapBackupByPageRequest {
    private 'project_id'?: string;
    public body?: CommRequestMindmapBackupPageParam;
    public constructor(projectId?: string) { 
        this['project_id'] = projectId;
    }
    public withProjectId(projectId: string): ShowMindmapBackupByPageRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withBody(body: CommRequestMindmapBackupPageParam): ShowMindmapBackupByPageRequest {
        this['body'] = body;
        return this;
    }
}