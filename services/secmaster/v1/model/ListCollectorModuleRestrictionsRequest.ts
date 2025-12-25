import { ModuleTemplateFieldDto } from './ModuleTemplateFieldDto';


export class ListCollectorModuleRestrictionsRequest {
    private 'workspace_id'?: string;
    public body?: ModuleTemplateFieldDto;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCollectorModuleRestrictionsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ModuleTemplateFieldDto): ListCollectorModuleRestrictionsRequest {
        this['body'] = body;
        return this;
    }
}