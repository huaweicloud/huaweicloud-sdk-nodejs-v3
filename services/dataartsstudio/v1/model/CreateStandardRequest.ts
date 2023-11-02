import { StandElementValueVOList } from './StandElementValueVOList';


export class CreateStandardRequest {
    public workspace?: string;
    public body?: StandElementValueVOList;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateStandardRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: StandElementValueVOList): CreateStandardRequest {
        this['body'] = body;
        return this;
    }
}