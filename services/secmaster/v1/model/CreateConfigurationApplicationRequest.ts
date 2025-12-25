import { CreateConfigurationApplicationRequestBody } from './CreateConfigurationApplicationRequestBody';


export class CreateConfigurationApplicationRequest {
    private 'workspace_id'?: string;
    private 'component_id'?: string;
    public body?: CreateConfigurationApplicationRequestBody;
    public constructor(workspaceId?: string, componentId?: string) { 
        this['workspace_id'] = workspaceId;
        this['component_id'] = componentId;
    }
    public withWorkspaceId(workspaceId: string): CreateConfigurationApplicationRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withComponentId(componentId: string): CreateConfigurationApplicationRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withBody(body: CreateConfigurationApplicationRequestBody): CreateConfigurationApplicationRequest {
        this['body'] = body;
        return this;
    }
}