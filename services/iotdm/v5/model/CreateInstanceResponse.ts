import { AdditionalParams } from './AdditionalParams';
import { ChargeInfo } from './ChargeInfo';
import { Flavor } from './Flavor';
import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstanceResponse extends SdkResponse {
    private 'instance_type'?: string;
    private 'instance_id'?: string;
    public name?: string;
    public flavor?: Flavor;
    public status?: string;
    private 'charge_info'?: ChargeInfo;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'order_id'?: string;
    private 'additional_params'?: AdditionalParams;
    public constructor() { 
        super();
    }
    public withInstanceType(instanceType: string): CreateInstanceResponse {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceId(instanceId: string): CreateInstanceResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): CreateInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withFlavor(flavor: Flavor): CreateInstanceResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: string): CreateInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withChargeInfo(chargeInfo: ChargeInfo): CreateInstanceResponse {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfo | undefined {
        return this['charge_info'];
    }
    public withDescription(description: string): CreateInstanceResponse {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateInstanceResponse {
        this['tags'] = tags;
        return this;
    }
    public withOrderId(orderId: string): CreateInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withAdditionalParams(additionalParams: AdditionalParams): CreateInstanceResponse {
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