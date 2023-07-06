import { AccessConfigBaseLogInfoCreate } from './AccessConfigBaseLogInfoCreate';
import { AccessConfigDeatilCreate } from './AccessConfigDeatilCreate';
import { AccessConfigHostGroupIdListCreate } from './AccessConfigHostGroupIdListCreate';
import { AccessConfigTag } from './AccessConfigTag';


export class CreateAccessConfigRequestBody {
    private 'access_config_name': string | undefined;
    private 'access_config_type': CreateAccessConfigRequestBodyAccessConfigTypeEnum | undefined;
    private 'access_config_detail': AccessConfigDeatilCreate | undefined;
    private 'log_info': AccessConfigBaseLogInfoCreate | undefined;
    private 'host_group_info'?: AccessConfigHostGroupIdListCreate | undefined;
    private 'access_config_tag'?: Array<AccessConfigTag> | undefined;
    private 'binary_collect'?: boolean | undefined;
    private 'log_split'?: boolean | undefined;
    public constructor(accessConfigName?: any, accessConfigType?: any, accessConfigDetail?: any, logInfo?: any) { 
        this['access_config_name'] = accessConfigName;
        this['access_config_type'] = accessConfigType;
        this['access_config_detail'] = accessConfigDetail;
        this['log_info'] = logInfo;
    }
    public withAccessConfigName(accessConfigName: string): CreateAccessConfigRequestBody {
        this['access_config_name'] = accessConfigName;
        return this;
    }
    public set accessConfigName(accessConfigName: string | undefined) {
        this['access_config_name'] = accessConfigName;
    }
    public get accessConfigName() {
        return this['access_config_name'];
    }
    public withAccessConfigType(accessConfigType: CreateAccessConfigRequestBodyAccessConfigTypeEnum): CreateAccessConfigRequestBody {
        this['access_config_type'] = accessConfigType;
        return this;
    }
    public set accessConfigType(accessConfigType: CreateAccessConfigRequestBodyAccessConfigTypeEnum | undefined) {
        this['access_config_type'] = accessConfigType;
    }
    public get accessConfigType() {
        return this['access_config_type'];
    }
    public withAccessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate): CreateAccessConfigRequestBody {
        this['access_config_detail'] = accessConfigDetail;
        return this;
    }
    public set accessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate | undefined) {
        this['access_config_detail'] = accessConfigDetail;
    }
    public get accessConfigDetail() {
        return this['access_config_detail'];
    }
    public withLogInfo(logInfo: AccessConfigBaseLogInfoCreate): CreateAccessConfigRequestBody {
        this['log_info'] = logInfo;
        return this;
    }
    public set logInfo(logInfo: AccessConfigBaseLogInfoCreate | undefined) {
        this['log_info'] = logInfo;
    }
    public get logInfo() {
        return this['log_info'];
    }
    public withHostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdListCreate): CreateAccessConfigRequestBody {
        this['host_group_info'] = hostGroupInfo;
        return this;
    }
    public set hostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdListCreate | undefined) {
        this['host_group_info'] = hostGroupInfo;
    }
    public get hostGroupInfo() {
        return this['host_group_info'];
    }
    public withAccessConfigTag(accessConfigTag: Array<AccessConfigTag>): CreateAccessConfigRequestBody {
        this['access_config_tag'] = accessConfigTag;
        return this;
    }
    public set accessConfigTag(accessConfigTag: Array<AccessConfigTag> | undefined) {
        this['access_config_tag'] = accessConfigTag;
    }
    public get accessConfigTag() {
        return this['access_config_tag'];
    }
    public withBinaryCollect(binaryCollect: boolean): CreateAccessConfigRequestBody {
        this['binary_collect'] = binaryCollect;
        return this;
    }
    public set binaryCollect(binaryCollect: boolean | undefined) {
        this['binary_collect'] = binaryCollect;
    }
    public get binaryCollect() {
        return this['binary_collect'];
    }
    public withLogSplit(logSplit: boolean): CreateAccessConfigRequestBody {
        this['log_split'] = logSplit;
        return this;
    }
    public set logSplit(logSplit: boolean | undefined) {
        this['log_split'] = logSplit;
    }
    public get logSplit() {
        return this['log_split'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAccessConfigRequestBodyAccessConfigTypeEnum {
    AGENT = 'AGENT',
    K8S_CCE = 'K8S_CCE'
}
