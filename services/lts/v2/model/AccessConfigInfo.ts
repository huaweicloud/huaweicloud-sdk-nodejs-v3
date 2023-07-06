import { AccessConfigDeatilCreate } from './AccessConfigDeatilCreate';
import { AccessConfigHostGroupIdList } from './AccessConfigHostGroupIdList';
import { AccessConfigQueryLogInfo } from './AccessConfigQueryLogInfo';
import { AccessConfigTag } from './AccessConfigTag';


export class AccessConfigInfo {
    private 'access_config_id'?: string | undefined;
    private 'access_config_name'?: string | undefined;
    private 'access_config_type'?: AccessConfigInfoAccessConfigTypeEnum | undefined;
    private 'create_time'?: number | undefined;
    private 'access_config_detail'?: AccessConfigDeatilCreate | undefined;
    private 'log_info'?: AccessConfigQueryLogInfo | undefined;
    private 'host_group_info'?: AccessConfigHostGroupIdList | undefined;
    private 'access_config_tag'?: Array<AccessConfigTag> | undefined;
    private 'log_split'?: boolean | undefined;
    private 'binary_collect'?: boolean | undefined;
    public constructor() { 
    }
    public withAccessConfigId(accessConfigId: string): AccessConfigInfo {
        this['access_config_id'] = accessConfigId;
        return this;
    }
    public set accessConfigId(accessConfigId: string | undefined) {
        this['access_config_id'] = accessConfigId;
    }
    public get accessConfigId() {
        return this['access_config_id'];
    }
    public withAccessConfigName(accessConfigName: string): AccessConfigInfo {
        this['access_config_name'] = accessConfigName;
        return this;
    }
    public set accessConfigName(accessConfigName: string | undefined) {
        this['access_config_name'] = accessConfigName;
    }
    public get accessConfigName() {
        return this['access_config_name'];
    }
    public withAccessConfigType(accessConfigType: AccessConfigInfoAccessConfigTypeEnum): AccessConfigInfo {
        this['access_config_type'] = accessConfigType;
        return this;
    }
    public set accessConfigType(accessConfigType: AccessConfigInfoAccessConfigTypeEnum | undefined) {
        this['access_config_type'] = accessConfigType;
    }
    public get accessConfigType() {
        return this['access_config_type'];
    }
    public withCreateTime(createTime: number): AccessConfigInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withAccessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate): AccessConfigInfo {
        this['access_config_detail'] = accessConfigDetail;
        return this;
    }
    public set accessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate | undefined) {
        this['access_config_detail'] = accessConfigDetail;
    }
    public get accessConfigDetail() {
        return this['access_config_detail'];
    }
    public withLogInfo(logInfo: AccessConfigQueryLogInfo): AccessConfigInfo {
        this['log_info'] = logInfo;
        return this;
    }
    public set logInfo(logInfo: AccessConfigQueryLogInfo | undefined) {
        this['log_info'] = logInfo;
    }
    public get logInfo() {
        return this['log_info'];
    }
    public withHostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdList): AccessConfigInfo {
        this['host_group_info'] = hostGroupInfo;
        return this;
    }
    public set hostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdList | undefined) {
        this['host_group_info'] = hostGroupInfo;
    }
    public get hostGroupInfo() {
        return this['host_group_info'];
    }
    public withAccessConfigTag(accessConfigTag: Array<AccessConfigTag>): AccessConfigInfo {
        this['access_config_tag'] = accessConfigTag;
        return this;
    }
    public set accessConfigTag(accessConfigTag: Array<AccessConfigTag> | undefined) {
        this['access_config_tag'] = accessConfigTag;
    }
    public get accessConfigTag() {
        return this['access_config_tag'];
    }
    public withLogSplit(logSplit: boolean): AccessConfigInfo {
        this['log_split'] = logSplit;
        return this;
    }
    public set logSplit(logSplit: boolean | undefined) {
        this['log_split'] = logSplit;
    }
    public get logSplit() {
        return this['log_split'];
    }
    public withBinaryCollect(binaryCollect: boolean): AccessConfigInfo {
        this['binary_collect'] = binaryCollect;
        return this;
    }
    public set binaryCollect(binaryCollect: boolean | undefined) {
        this['binary_collect'] = binaryCollect;
    }
    public get binaryCollect() {
        return this['binary_collect'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessConfigInfoAccessConfigTypeEnum {
    AGENT = 'AGENT',
    K8S_CCE = 'K8S_CCE'
}
