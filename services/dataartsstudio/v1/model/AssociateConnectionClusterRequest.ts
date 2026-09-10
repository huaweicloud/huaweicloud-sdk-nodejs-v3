import { AssociateConnectionClusterReq } from './AssociateConnectionClusterReq';


export class AssociateConnectionClusterRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'connection_id'?: string;
    public body?: AssociateConnectionClusterReq;
    public constructor(workspace?: string, connectionId?: string) { 
        this['workspace'] = workspace;
        this['connection_id'] = connectionId;
    }
    public withWorkspace(workspace: string): AssociateConnectionClusterRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): AssociateConnectionClusterRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withConnectionId(connectionId: string): AssociateConnectionClusterRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withBody(body: AssociateConnectionClusterReq): AssociateConnectionClusterRequest {
        this['body'] = body;
        return this;
    }
}