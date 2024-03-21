import { BatchDeleteSecrecyLevelDTO } from './BatchDeleteSecrecyLevelDTO';


export class BatchDeleteSecuritySecrecyLevelsRequest {
    public workspace?: string;
    public body?: BatchDeleteSecrecyLevelDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): BatchDeleteSecuritySecrecyLevelsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BatchDeleteSecrecyLevelDTO): BatchDeleteSecuritySecrecyLevelsRequest {
        this['body'] = body;
        return this;
    }
}