import { ChangeLoadbalancerChargeModeRequestBody } from './ChangeLoadbalancerChargeModeRequestBody';


export class ChangeLoadbalancerChargeModeRequest {
    public body?: ChangeLoadbalancerChargeModeRequestBody;
    public constructor() { 
    }
    public withBody(body: ChangeLoadbalancerChargeModeRequestBody): ChangeLoadbalancerChargeModeRequest {
        this['body'] = body;
        return this;
    }
}