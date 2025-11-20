import { InstanceConfig } from './InstanceConfig';
import { ProductSpecData } from './ProductSpecData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceByInstanceIdResponse extends SdkResponse {
    private 'instance_name'?: string;
    private 'enterprise_project_id'?: string;
    public version?: string;
    private 'expire_time'?: number;
    private 'create_time'?: number;
    private 'current_time'?: number;
    private 'product_spec_data'?: ProductSpecData;
    private 'instance_config'?: InstanceConfig;
    private 'elastic_service_bw_update_enable'?: boolean;
    public constructor() { 
        super();
    }
    public withInstanceName(instanceName: string): ShowInstanceByInstanceIdResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowInstanceByInstanceIdResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withVersion(version: string): ShowInstanceByInstanceIdResponse {
        this['version'] = version;
        return this;
    }
    public withExpireTime(expireTime: number): ShowInstanceByInstanceIdResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withCreateTime(createTime: number): ShowInstanceByInstanceIdResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCurrentTime(currentTime: number): ShowInstanceByInstanceIdResponse {
        this['current_time'] = currentTime;
        return this;
    }
    public set currentTime(currentTime: number  | undefined) {
        this['current_time'] = currentTime;
    }
    public get currentTime(): number | undefined {
        return this['current_time'];
    }
    public withProductSpecData(productSpecData: ProductSpecData): ShowInstanceByInstanceIdResponse {
        this['product_spec_data'] = productSpecData;
        return this;
    }
    public set productSpecData(productSpecData: ProductSpecData  | undefined) {
        this['product_spec_data'] = productSpecData;
    }
    public get productSpecData(): ProductSpecData | undefined {
        return this['product_spec_data'];
    }
    public withInstanceConfig(instanceConfig: InstanceConfig): ShowInstanceByInstanceIdResponse {
        this['instance_config'] = instanceConfig;
        return this;
    }
    public set instanceConfig(instanceConfig: InstanceConfig  | undefined) {
        this['instance_config'] = instanceConfig;
    }
    public get instanceConfig(): InstanceConfig | undefined {
        return this['instance_config'];
    }
    public withElasticServiceBwUpdateEnable(elasticServiceBwUpdateEnable: boolean): ShowInstanceByInstanceIdResponse {
        this['elastic_service_bw_update_enable'] = elasticServiceBwUpdateEnable;
        return this;
    }
    public set elasticServiceBwUpdateEnable(elasticServiceBwUpdateEnable: boolean  | undefined) {
        this['elastic_service_bw_update_enable'] = elasticServiceBwUpdateEnable;
    }
    public get elasticServiceBwUpdateEnable(): boolean | undefined {
        return this['elastic_service_bw_update_enable'];
    }
}