import { ShowJobMonitorInfoReq } from './ShowJobMonitorInfoReq';


export class ShowFlinkMetricRequest {
    public body?: ShowJobMonitorInfoReq;
    public constructor() { 
    }
    public withBody(body: ShowJobMonitorInfoReq): ShowFlinkMetricRequest {
        this['body'] = body;
        return this;
    }
}