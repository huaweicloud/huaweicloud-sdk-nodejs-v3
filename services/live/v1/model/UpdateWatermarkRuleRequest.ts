import { ModifyWatermarkRule } from './ModifyWatermarkRule';


export class UpdateWatermarkRuleRequest {
    public id?: string;
    public body?: ModifyWatermarkRule;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateWatermarkRuleRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: ModifyWatermarkRule): UpdateWatermarkRuleRequest {
        this['body'] = body;
        return this;
    }
}