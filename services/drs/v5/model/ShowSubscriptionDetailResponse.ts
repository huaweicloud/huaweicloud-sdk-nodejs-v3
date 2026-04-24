import { ChargeInfoVo } from './ChargeInfoVo';
import { SubscriptionDataType } from './SubscriptionDataType';
import { SubscriptionEndpointInfo } from './SubscriptionEndpointInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubscriptionDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public ip?: string;
    private 'enterprise_project_id'?: string;
    public status?: string;
    private 'subscription_data_type'?: SubscriptionDataType;
    private 'source_endpoint'?: SubscriptionEndpointInfo;
    private 'created_time'?: string;
    private 'begin_time'?: string;
    private 'now_time'?: string;
    private 'engine_type'?: string;
    private 'charge_info'?: ChargeInfoVo;
    public description?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSubscriptionDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowSubscriptionDetailResponse {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): ShowSubscriptionDetailResponse {
        this['ip'] = ip;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowSubscriptionDetailResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStatus(status: string): ShowSubscriptionDetailResponse {
        this['status'] = status;
        return this;
    }
    public withSubscriptionDataType(subscriptionDataType: SubscriptionDataType): ShowSubscriptionDetailResponse {
        this['subscription_data_type'] = subscriptionDataType;
        return this;
    }
    public set subscriptionDataType(subscriptionDataType: SubscriptionDataType  | undefined) {
        this['subscription_data_type'] = subscriptionDataType;
    }
    public get subscriptionDataType(): SubscriptionDataType | undefined {
        return this['subscription_data_type'];
    }
    public withSourceEndpoint(sourceEndpoint: SubscriptionEndpointInfo): ShowSubscriptionDetailResponse {
        this['source_endpoint'] = sourceEndpoint;
        return this;
    }
    public set sourceEndpoint(sourceEndpoint: SubscriptionEndpointInfo  | undefined) {
        this['source_endpoint'] = sourceEndpoint;
    }
    public get sourceEndpoint(): SubscriptionEndpointInfo | undefined {
        return this['source_endpoint'];
    }
    public withCreatedTime(createdTime: string): ShowSubscriptionDetailResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withBeginTime(beginTime: string): ShowSubscriptionDetailResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withNowTime(nowTime: string): ShowSubscriptionDetailResponse {
        this['now_time'] = nowTime;
        return this;
    }
    public set nowTime(nowTime: string  | undefined) {
        this['now_time'] = nowTime;
    }
    public get nowTime(): string | undefined {
        return this['now_time'];
    }
    public withEngineType(engineType: string): ShowSubscriptionDetailResponse {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
    public withChargeInfo(chargeInfo: ChargeInfoVo): ShowSubscriptionDetailResponse {
        this['charge_info'] = chargeInfo;
        return this;
    }
    public set chargeInfo(chargeInfo: ChargeInfoVo  | undefined) {
        this['charge_info'] = chargeInfo;
    }
    public get chargeInfo(): ChargeInfoVo | undefined {
        return this['charge_info'];
    }
    public withDescription(description: string): ShowSubscriptionDetailResponse {
        this['description'] = description;
        return this;
    }
}