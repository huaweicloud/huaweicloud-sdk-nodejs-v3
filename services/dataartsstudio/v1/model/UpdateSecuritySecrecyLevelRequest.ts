import { UpdateSecrecyLevelDTO } from './UpdateSecrecyLevelDTO';


export class UpdateSecuritySecrecyLevelRequest {
    public workspace?: string;
    public id?: string;
    public body?: UpdateSecrecyLevelDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateSecuritySecrecyLevelRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateSecuritySecrecyLevelRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateSecrecyLevelDTO): UpdateSecuritySecrecyLevelRequest {
        this['body'] = body;
        return this;
    }
}