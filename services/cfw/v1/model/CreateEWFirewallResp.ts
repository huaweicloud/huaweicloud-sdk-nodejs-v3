import { CreateEWFirewallInspectVpcResp } from './CreateEWFirewallInspectVpcResp';
import { Er } from './Er';


export class CreateEWFirewallResp {
    public id?: string;
    public er?: Er;
    private 'inspertion_vpc'?: CreateEWFirewallInspectVpcResp;
    public constructor() { 
    }
    public withId(id: string): CreateEWFirewallResp {
        this['id'] = id;
        return this;
    }
    public withEr(er: Er): CreateEWFirewallResp {
        this['er'] = er;
        return this;
    }
    public withInspertionVpc(inspertionVpc: CreateEWFirewallInspectVpcResp): CreateEWFirewallResp {
        this['inspertion_vpc'] = inspertionVpc;
        return this;
    }
    public set inspertionVpc(inspertionVpc: CreateEWFirewallInspectVpcResp  | undefined) {
        this['inspertion_vpc'] = inspertionVpc;
    }
    public get inspertionVpc(): CreateEWFirewallInspectVpcResp | undefined {
        return this['inspertion_vpc'];
    }
}