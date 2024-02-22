import { CreateFirewallReqChargeInfo } from './CreateFirewallReqChargeInfo';
import { CreateFirewallReqFlavor } from './CreateFirewallReqFlavor';
import { CreateFirewallReqTags } from './CreateFirewallReqTags';


export class CreateFirewallReq {
    public name?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<CreateFirewallReqTags>;
    public flavor?: CreateFirewallReqFlavor;
    private 'charge_info'?: CreateFirewallReqChargeInfo;
    public constructor(name?: string, chargeInfo?: CreateFirewallReqChargeInfo) { 
        this['name'] = name;
        this['charge_info'] = chargeInfo;
    }
    public withName(name: string): CreateFirewallReq {
        this['name'] = name;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateFirewallReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<CreateFirewallReqTags>): CreateFirewallReq {
        this['tags'] = tags;
        return this;
    }
    public withFlavor(flavor: CreateFirewallReqFlavor): CreateFirewallReq {
        this['flavor'] = flavor;
        return this;
    }
    public withChargeInfo(chargeInfo: CreateFirewallReqChargeInfo): CreateFirewallReq {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: CreateFirewallReqChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): CreateFirewallReqChargeInfo | undefined {
        return this['charge_info'];
    }
}