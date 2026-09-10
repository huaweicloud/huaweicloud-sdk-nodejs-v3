import { CreateConnectionRoutesReq } from './CreateConnectionRoutesReq';


export class CreateDatasourceConnectionRoutesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'connection_id'?: string;
    public body?: CreateConnectionRoutesReq;
    public constructor(workspace?: string, connectionId?: string) { 
        this['workspace'] = workspace;
        this['connection_id'] = connectionId;
    }
    public withWorkspace(workspace: string): CreateDatasourceConnectionRoutesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): CreateDatasourceConnectionRoutesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withConnectionId(connectionId: string): CreateDatasourceConnectionRoutesRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: CreateConnectionRoutesReq): CreateDatasourceConnectionRoutesRequest {
        this['body'] = body;
        return this;
    }
}