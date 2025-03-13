import { ReasonDTO } from './ReasonDTO';


export class DeclineSecurityApplicationRequest {
    public workspace?: string;
    public id?: string;
    public body?: ReasonDTO;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): DeclineSecurityApplicationRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): DeclineSecurityApplicationRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ReasonDTO): DeclineSecurityApplicationRequest {
        this['body'] = body;
        return this;
    }
}