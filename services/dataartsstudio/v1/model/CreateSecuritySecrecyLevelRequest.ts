import { CreateSecrecyLevelDTO } from './CreateSecrecyLevelDTO';


export class CreateSecuritySecrecyLevelRequest {
    public workspace?: string;
    public body?: CreateSecrecyLevelDTO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateSecuritySecrecyLevelRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: CreateSecrecyLevelDTO): CreateSecuritySecrecyLevelRequest {
        this['body'] = body;
        return this;
    }
}