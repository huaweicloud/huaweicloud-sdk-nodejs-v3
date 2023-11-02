import { ApigDataSourcesVo } from './ApigDataSourcesVo';


export class UpdateDataconnectionRequest {
    public workspace?: string;
    private 'data_connection_id'?: string;
    public body?: ApigDataSourcesVo;
    public constructor(workspace?: string, dataConnectionId?: string) { 
        this['workspace'] = workspace;
        this['data_connection_id'] = dataConnectionId;
    }
    public withWorkspace(workspace: string): UpdateDataconnectionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withDataConnectionId(dataConnectionId: string): UpdateDataconnectionRequest {
        this['data_connection_id'] = dataConnectionId;
        return this;
    }
    public set dataConnectionId(dataConnectionId: string  | undefined) {
        this['data_connection_id'] = dataConnectionId;
    }
    public get dataConnectionId(): string | undefined {
        return this['data_connection_id'];
    }
    public withBody(body: ApigDataSourcesVo): UpdateDataconnectionRequest {
        this['body'] = body;
        return this;
    }
}