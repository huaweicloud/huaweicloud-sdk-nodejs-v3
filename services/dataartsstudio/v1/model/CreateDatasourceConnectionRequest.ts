import { CreateConnectionReq } from './CreateConnectionReq';


export class CreateDatasourceConnectionRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'instance_id'?: string;
    public body?: CreateConnectionReq;
    public constructor(workspace?: string, instanceId?: string) { 
        this['workspace'] = workspace;
        this['instance_id'] = instanceId;
    }
    public withWorkspace(workspace: string): CreateDatasourceConnectionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): CreateDatasourceConnectionRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withInstanceId(instanceId: string): CreateDatasourceConnectionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateConnectionReq): CreateDatasourceConnectionRequest {
        this['body'] = body;
        return this;
    }
}