import { AccessConfigDeatilCreate } from './AccessConfigDeatilCreate';
import { AccessConfigHostGroupIdList } from './AccessConfigHostGroupIdList';
import { AccessConfigQueryLogInfo } from './AccessConfigQueryLogInfo';
import { AccessConfigTag } from './AccessConfigTag';
import { DemoFieldAccess } from './DemoFieldAccess';
import { Processor } from './Processor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAccessConfigResponse extends SdkResponse {
    private 'access_config_id'?: string;
    private 'access_config_name'?: string;
    private 'access_config_type'?: UpdateAccessConfigResponseAccessConfigTypeEnum | string;
    private 'create_time'?: number;
    private 'access_config_detail'?: AccessConfigDeatilCreate;
    private 'log_info'?: AccessConfigQueryLogInfo;
    private 'host_group_info'?: AccessConfigHostGroupIdList;
    private 'access_config_tag'?: Array<AccessConfigTag>;
    private 'log_split'?: boolean;
    private 'binary_collect'?: boolean;
    private 'cluster_id'?: string;
    private 'encoding_format'?: string;
    private 'incremental_collect'?: boolean;
    private 'processor_type'?: string;
    private 'demo_log'?: string;
    private 'demo_fields'?: Array<DemoFieldAccess>;
    public processors?: Array<Processor>;
    private 'application_id'?: string;
    private 'environment_id'?: string;
    private 'component_id'?: Array<string>;
    public constructor() { 
        super();
    }
    public withAccessConfigId(accessConfigId: string): UpdateAccessConfigResponse {
        this['access_config_id'] = accessConfigId;
        return this;
    }
    public set accessConfigId(accessConfigId: string  | undefined) {
        this['access_config_id'] = accessConfigId;
    }
    public get accessConfigId(): string | undefined {
        return this['access_config_id'];
    }
    public withAccessConfigName(accessConfigName: string): UpdateAccessConfigResponse {
        this['access_config_name'] = accessConfigName;
        return this;
    }
    public set accessConfigName(accessConfigName: string  | undefined) {
        this['access_config_name'] = accessConfigName;
    }
    public get accessConfigName(): string | undefined {
        return this['access_config_name'];
    }
    public withAccessConfigType(accessConfigType: UpdateAccessConfigResponseAccessConfigTypeEnum | string): UpdateAccessConfigResponse {
        this['access_config_type'] = accessConfigType;
        return this;
    }
    public set accessConfigType(accessConfigType: UpdateAccessConfigResponseAccessConfigTypeEnum | string  | undefined) {
        this['access_config_type'] = accessConfigType;
    }
    public get accessConfigType(): UpdateAccessConfigResponseAccessConfigTypeEnum | string | undefined {
        return this['access_config_type'];
    }
    public withCreateTime(createTime: number): UpdateAccessConfigResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withAccessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate): UpdateAccessConfigResponse {
        this['access_config_detail'] = accessConfigDetail;
        return this;
    }
    public set accessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate  | undefined) {
        this['access_config_detail'] = accessConfigDetail;
    }
    public get accessConfigDetail(): AccessConfigDeatilCreate | undefined {
        return this['access_config_detail'];
    }
    public withLogInfo(logInfo: AccessConfigQueryLogInfo): UpdateAccessConfigResponse {
        this['log_info'] = logInfo;
        return this;
    }
    public set logInfo(logInfo: AccessConfigQueryLogInfo  | undefined) {
        this['log_info'] = logInfo;
    }
    public get logInfo(): AccessConfigQueryLogInfo | undefined {
        return this['log_info'];
    }
    public withHostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdList): UpdateAccessConfigResponse {
        this['host_group_info'] = hostGroupInfo;
        return this;
    }
    public set hostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdList  | undefined) {
        this['host_group_info'] = hostGroupInfo;
    }
    public get hostGroupInfo(): AccessConfigHostGroupIdList | undefined {
        return this['host_group_info'];
    }
    public withAccessConfigTag(accessConfigTag: Array<AccessConfigTag>): UpdateAccessConfigResponse {
        this['access_config_tag'] = accessConfigTag;
        return this;
    }
    public set accessConfigTag(accessConfigTag: Array<AccessConfigTag>  | undefined) {
        this['access_config_tag'] = accessConfigTag;
    }
    public get accessConfigTag(): Array<AccessConfigTag> | undefined {
        return this['access_config_tag'];
    }
    public withLogSplit(logSplit: boolean): UpdateAccessConfigResponse {
        this['log_split'] = logSplit;
        return this;
    }
    public set logSplit(logSplit: boolean  | undefined) {
        this['log_split'] = logSplit;
    }
    public get logSplit(): boolean | undefined {
        return this['log_split'];
    }
    public withBinaryCollect(binaryCollect: boolean): UpdateAccessConfigResponse {
        this['binary_collect'] = binaryCollect;
        return this;
    }
    public set binaryCollect(binaryCollect: boolean  | undefined) {
        this['binary_collect'] = binaryCollect;
    }
    public get binaryCollect(): boolean | undefined {
        return this['binary_collect'];
    }
    public withClusterId(clusterId: string): UpdateAccessConfigResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withEncodingFormat(encodingFormat: string): UpdateAccessConfigResponse {
        this['encoding_format'] = encodingFormat;
        return this;
    }
    public set encodingFormat(encodingFormat: string  | undefined) {
        this['encoding_format'] = encodingFormat;
    }
    public get encodingFormat(): string | undefined {
        return this['encoding_format'];
    }
    public withIncrementalCollect(incrementalCollect: boolean): UpdateAccessConfigResponse {
        this['incremental_collect'] = incrementalCollect;
        return this;
    }
    public set incrementalCollect(incrementalCollect: boolean  | undefined) {
        this['incremental_collect'] = incrementalCollect;
    }
    public get incrementalCollect(): boolean | undefined {
        return this['incremental_collect'];
    }
    public withProcessorType(processorType: string): UpdateAccessConfigResponse {
        this['processor_type'] = processorType;
        return this;
    }
    public set processorType(processorType: string  | undefined) {
        this['processor_type'] = processorType;
    }
    public get processorType(): string | undefined {
        return this['processor_type'];
    }
    public withDemoLog(demoLog: string): UpdateAccessConfigResponse {
        this['demo_log'] = demoLog;
        return this;
    }
    public set demoLog(demoLog: string  | undefined) {
        this['demo_log'] = demoLog;
    }
    public get demoLog(): string | undefined {
        return this['demo_log'];
    }
    public withDemoFields(demoFields: Array<DemoFieldAccess>): UpdateAccessConfigResponse {
        this['demo_fields'] = demoFields;
        return this;
    }
    public set demoFields(demoFields: Array<DemoFieldAccess>  | undefined) {
        this['demo_fields'] = demoFields;
    }
    public get demoFields(): Array<DemoFieldAccess> | undefined {
        return this['demo_fields'];
    }
    public withProcessors(processors: Array<Processor>): UpdateAccessConfigResponse {
        this['processors'] = processors;
        return this;
    }
    public withApplicationId(applicationId: string): UpdateAccessConfigResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withEnvironmentId(environmentId: string): UpdateAccessConfigResponse {
        this['environment_id'] = environmentId;
        return this;
    }
    public set environmentId(environmentId: string  | undefined) {
        this['environment_id'] = environmentId;
    }
    public get environmentId(): string | undefined {
        return this['environment_id'];
    }
    public withComponentId(componentId: Array<string>): UpdateAccessConfigResponse {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: Array<string>  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): Array<string> | undefined {
        return this['component_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAccessConfigResponseAccessConfigTypeEnum {
    AGENT = 'AGENT',
    K8S_CCE = 'K8S_CCE'
}
