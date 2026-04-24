import { CreateBaselineRequest } from './CreateBaselineRequest';


export class CreateFactoryBaselineRequest {
    private 'instance_id'?: string;
    private 'X-Project-Id'?: string;
    public workspace?: string;
    private 'Content-Type'?: string;
    public body?: CreateBaselineRequest;
    public constructor(instanceId?: string, workspace?: string) { 
        this['instance_id'] = instanceId;
        this['workspace'] = workspace;
    }
    public withInstanceId(instanceId: string): CreateFactoryBaselineRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXProjectId(xProjectId: string): CreateFactoryBaselineRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withWorkspace(workspace: string): CreateFactoryBaselineRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withContentType(contentType: string): CreateFactoryBaselineRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateBaselineRequest): CreateFactoryBaselineRequest {
        this['body'] = body;
        return this;
    }
}