import { AddMetricNotifyRuleReq } from './AddMetricNotifyRuleReq';


export class AddMetricNotifyRuleRequest {
    public body?: AddMetricNotifyRuleReq;
    public constructor() { 
    }
    public withBody(body: AddMetricNotifyRuleReq): AddMetricNotifyRuleRequest {
        this['body'] = body;
        return this;
    }
}