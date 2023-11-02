import { IdsParam } from './IdsParam';


export class DeleteBizMetricRequest {
    public workspace?: string;
    public body?: IdsParam;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): DeleteBizMetricRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: IdsParam): DeleteBizMetricRequest {
        this['body'] = body;
        return this;
    }
}