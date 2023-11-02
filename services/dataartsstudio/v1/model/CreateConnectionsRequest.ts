import { ApigDataSourcesVo } from './ApigDataSourcesVo';


export class CreateConnectionsRequest {
    public workspace?: string;
    public body?: ApigDataSourcesVo;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateConnectionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: ApigDataSourcesVo): CreateConnectionsRequest {
        this['body'] = body;
        return this;
    }
}