import { WatermarkRule } from './WatermarkRule';


export class CreateWatermarkRuleRequest {
    public body?: WatermarkRule;
    public constructor() { 
    }
    public withBody(body: WatermarkRule): CreateWatermarkRuleRequest {
        this['body'] = body;
        return this;
    }
}