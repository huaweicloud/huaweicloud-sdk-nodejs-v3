import { CreateNatGatewayDnatOption } from './CreateNatGatewayDnatOption';


export class BatchCreateNatGatewayDnatRulesRequestBody {
    private 'dnat_rules'?: Array<CreateNatGatewayDnatOption>;
    public constructor(dnatRules?: Array<CreateNatGatewayDnatOption>) { 
        this['dnat_rules'] = dnatRules;
    }
    public withDnatRules(dnatRules: Array<CreateNatGatewayDnatOption>): BatchCreateNatGatewayDnatRulesRequestBody {
        this['dnat_rules'] = dnatRules;
        return this;
    }
    public set dnatRules(dnatRules: Array<CreateNatGatewayDnatOption>  | undefined) {
        this['dnat_rules'] = dnatRules;
    }
    public get dnatRules(): Array<CreateNatGatewayDnatOption> | undefined {
        return this['dnat_rules'];
    }
}