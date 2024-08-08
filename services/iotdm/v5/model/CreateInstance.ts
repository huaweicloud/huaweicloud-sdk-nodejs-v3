import { AdditionalParams } from './AdditionalParams';
import { ChargeInfo } from './ChargeInfo';
import { Flavor } from './Flavor';
import { Tag } from './Tag';


export class CreateInstance {
    private 'instance_type'?: string;
    public flavor?: Flavor;
    public name?: string;
    private 'charge_info'?: ChargeInfo;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'additional_params'?: AdditionalParams;
    public constructor(instanceType?: string, flavor?: Flavor, name?: string, chargeInfo?: ChargeInfo) { 
        this['instance_type'] = instanceType;
        this['flavor'] = flavor;
        this['name'] = name;
        this['charge_info'] = chargeInfo;
    }
    public withInstanceType(instanceType: string): CreateInstance {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withFlavor(flavor: Flavor): CreateInstance {
        this['flavor'] = flavor;
        return this;
    }
    public withName(name: string): CreateInstance {
        this['name'] = name;
        return this;
    }
    public withChargeInfo(chargeInfo: ChargeInfo): CreateInstance {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfo | undefined {
        return this['charge_info'];
    }
    public withDescription(description: string): CreateInstance {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstance {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateInstance {
        this['tags'] = tags;
        return this;
    }
    public withAdditionalParams(additionalParams: AdditionalParams): CreateInstance {
        this['additional_params'] = additionalParams;
        return this;
    }
    public set additionalParams(additionalParams: AdditionalParams  | undefined) {
        this['additional_params'] = additionalParams;
    }
    public get additionalParams(): AdditionalParams | undefined {
        return this['additional_params'];
    }
}