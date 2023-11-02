import { StandElementValueVOList } from './StandElementValueVOList';


export class UpdateStandardRequest {
    public workspace?: string;
    public id?: string;
    public body?: StandElementValueVOList;
    public constructor(workspace?: string, id?: string) { 
        this['workspace'] = workspace;
        this['id'] = id;
    }
    public withWorkspace(workspace: string): UpdateStandardRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withId(id: string): UpdateStandardRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: StandElementValueVOList): UpdateStandardRequest {
        this['body'] = body;
        return this;
    }
}