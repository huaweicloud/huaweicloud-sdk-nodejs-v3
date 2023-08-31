import { CreateNatGatewayDnatRuleOption } from './CreateNatGatewayDnatRuleOption';


export class CreateNatGatewayDnatRuleRequest {
    public body?: CreateNatGatewayDnatRuleOption;
    public constructor() { 
    }
    public withBody(body: CreateNatGatewayDnatRuleOption): CreateNatGatewayDnatRuleRequest {
        this['body'] = body;
        return this;
    }
}