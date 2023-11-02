import { ApigDataSourceVo } from './ApigDataSourceVo';


export class DebugDataconnectionRequest {
    public workspace?: string;
    public body?: ApigDataSourceVo;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): DebugDataconnectionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: ApigDataSourceVo): DebugDataconnectionRequest {
        this['body'] = body;
        return this;
    }
}