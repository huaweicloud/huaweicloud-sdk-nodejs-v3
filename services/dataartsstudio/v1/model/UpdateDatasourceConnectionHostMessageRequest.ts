import { UpdateConnectionHostReq } from './UpdateConnectionHostReq';


export class UpdateDatasourceConnectionHostMessageRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'instance_id'?: string;
    private 'connection_id'?: string;
    public body?: UpdateConnectionHostReq;
    public constructor(workspace?: string, instanceId?: string, connectionId?: string) { 
        this['workspace'] = workspace;
        this['instance_id'] = instanceId;
        this['connection_id'] = connectionId;
    }
    public withWorkspace(workspace: string): UpdateDatasourceConnectionHostMessageRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): UpdateDatasourceConnectionHostMessageRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withInstanceId(instanceId: string): UpdateDatasourceConnectionHostMessageRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withConnectionId(connectionId: string): UpdateDatasourceConnectionHostMessageRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: UpdateConnectionHostReq): UpdateDatasourceConnectionHostMessageRequest {
        this['body'] = body;
        return this;
    }
}