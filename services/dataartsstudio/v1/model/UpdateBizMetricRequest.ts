import { BizMetricVO } from './BizMetricVO';


export class UpdateBizMetricRequest {
    public workspace?: string;
    public body?: BizMetricVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateBizMetricRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: BizMetricVO): UpdateBizMetricRequest {
        this['body'] = body;
        return this;
    }
}