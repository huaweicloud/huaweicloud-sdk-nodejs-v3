import { AccessInfo } from './AccessInfo';
import { AdditionalParamsResp } from './AdditionalParamsResp';
import { Flavor } from './Flavor';
import { OperateWindow } from './OperateWindow';
import { Tag } from './Tag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceResponse extends SdkResponse {
    private 'instance_type'?: string;
    private 'instance_id'?: string;
    private 'charge_mode'?: string;
    public name?: string;
    public flavor?: Flavor;
    public status?: string;
    private 'region_id'?: string;
    public description?: string;
    private 'access_infos'?: Array<AccessInfo>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'order_id'?: string;
    private 'operate_window'?: OperateWindow;
    private 'additional_params'?: AdditionalParamsResp;
    public constructor() { 
        super();
    }
    public withInstanceType(instanceType: string): ShowInstanceResponse {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withInstanceId(instanceId: string): ShowInstanceResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withChargeMode(chargeMode: string): ShowInstanceResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): string | undefined {
        return this['charge_mode'];
    }
    public withName(name: string): ShowInstanceResponse {
        this['name'] = name;
        return this;
    }
    public withFlavor(flavor: Flavor): ShowInstanceResponse {
        this['flavor'] = flavor;
        return this;
    }
    public withStatus(status: string): ShowInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withRegionId(regionId: string): ShowInstanceResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withDescription(description: string): ShowInstanceResponse {
        this['description'] = description;
        return this;
    }
    public withAccessInfos(accessInfos: Array<AccessInfo>): ShowInstanceResponse {
        this['access_infos'] = accessInfos;
        return this;
    }
    public set accessInfos(accessInfos: Array<AccessInfo>  | undefined) {
        this['access_infos'] = accessInfos;
    }
    public get accessInfos(): Array<AccessInfo> | undefined {
        return this['access_infos'];
    }
    public withCreateTime(createTime: string): ShowInstanceResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowInstanceResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowInstanceResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): ShowInstanceResponse {
        this['tags'] = tags;
        return this;
    }
    public withOrderId(orderId: string): ShowInstanceResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withOperateWindow(operateWindow: OperateWindow): ShowInstanceResponse {
        this['operate_window'] = operateWindow;
        return this;
    }
    public set operateWindow(operateWindow: OperateWindow  | undefined) {
        this['operate_window'] = operateWindow;
    }
    public get operateWindow(): OperateWindow | undefined {
        return this['operate_window'];
    }
    public withAdditionalParams(additionalParams: AdditionalParamsResp): ShowInstanceResponse {
        this['additional_params'] = additionalParams;
        return this;
    }
    public set additionalParams(additionalParams: AdditionalParamsResp  | undefined) {
        this['additional_params'] = additionalParams;
    }
    public get additionalParams(): AdditionalParamsResp | undefined {
        return this['additional_params'];
    }
}