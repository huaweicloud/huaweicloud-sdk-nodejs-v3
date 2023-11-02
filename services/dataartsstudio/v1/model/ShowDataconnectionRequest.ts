

export class ShowDataconnectionRequest {
    public workspace?: string;
    private 'data_connection_id'?: string;
    public constructor(workspace?: string, dataConnectionId?: string) { 
        this['workspace'] = workspace;
        this['data_connection_id'] = dataConnectionId;
    }
    public withWorkspace(workspace: string): ShowDataconnectionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDataConnectionId(dataConnectionId: string): ShowDataconnectionRequest {
        this['data_connection_id'] = dataConnectionId;
        return this;
    }
    public set dataConnectionId(dataConnectionId: string  | undefined) {
        this['data_connection_id'] = dataConnectionId;
    }
    public get dataConnectionId(): string | undefined {
        return this['data_connection_id'];
    }
}