import { ConfigurationInfoDto } from './ConfigurationInfoDto';


export class UpdateComponentConfigurationRequest {
    private 'component_id'?: string;
    private 'workspace_id'?: string;
    public body?: ConfigurationInfoDto;
    public constructor(componentId?: string, workspaceId?: string) { 
        this['component_id'] = componentId;
        this['workspace_id'] = workspaceId;
    }
    public withComponentId(componentId: string): UpdateComponentConfigurationRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withWorkspaceId(workspaceId: string): UpdateComponentConfigurationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBody(body: ConfigurationInfoDto): UpdateComponentConfigurationRequest {
        this['body'] = body;
        return this;
    }
}