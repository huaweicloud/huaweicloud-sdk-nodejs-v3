import { AccessConfigDeatilCreate } from './AccessConfigDeatilCreate';
import { AccessConfigHostGroupIdList } from './AccessConfigHostGroupIdList';
import { AccessConfigQueryLogInfo } from './AccessConfigQueryLogInfo';
import { AccessConfigTag } from './AccessConfigTag';

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
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAccessConfigResponseAccessConfigTypeEnum {
    AGENT = 'AGENT',
    K8S_CCE = 'K8S_CCE'
}
