import { CreateNatGatewaySnatRuleRequestOption } from './CreateNatGatewaySnatRuleRequestOption';


export class CreateNatGatewaySnatRuleRequest {
    public body?: CreateNatGatewaySnatRuleRequestOption;
    public constructor() { 
    }
    public withBody(body: CreateNatGatewaySnatRuleRequestOption): CreateNatGatewaySnatRuleRequest {
        this['body'] = body;
        return this;
    }
}