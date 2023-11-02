import { BizMetricVO } from './BizMetricVO';


export class CreateBizMetricRequest {
    public workspace?: string;
    public body?: BizMetricVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateBizMetricRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BizMetricVO): CreateBizMetricRequest {
        this['body'] = body;
        return this;
    }
}