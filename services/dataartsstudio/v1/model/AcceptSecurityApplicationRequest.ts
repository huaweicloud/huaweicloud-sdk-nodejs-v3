import { ReasonDTO } from './ReasonDTO';


export class AcceptSecurityApplicationRequest {
    public workspace?: string;
    public id?: string;
    public body?: ReasonDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): AcceptSecurityApplicationRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): AcceptSecurityApplicationRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ReasonDTO): AcceptSecurityApplicationRequest {
        this['body'] = body;
        return this;
    }
}