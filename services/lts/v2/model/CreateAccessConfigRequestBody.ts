import { AccessConfigBaseLogInfoCreate } from './AccessConfigBaseLogInfoCreate';
import { AccessConfigDeatilCreate } from './AccessConfigDeatilCreate';
import { AccessConfigHostGroupIdListCreate } from './AccessConfigHostGroupIdListCreate';
import { AccessConfigTag } from './AccessConfigTag';


export class CreateAccessConfigRequestBody {
    private 'access_config_name'?: string;
    private 'access_config_type'?: CreateAccessConfigRequestBodyAccessConfigTypeEnum | string;
    private 'access_config_detail'?: AccessConfigDeatilCreate;
    private 'log_info'?: AccessConfigBaseLogInfoCreate;
    private 'host_group_info'?: AccessConfigHostGroupIdListCreate;
    private 'access_config_tag'?: Array<AccessConfigTag>;
    private 'binary_collect'?: boolean;
    private 'log_split'?: boolean;
    public constructor(accessConfigName?: string, accessConfigType?: string, accessConfigDetail?: AccessConfigDeatilCreate, logInfo?: AccessConfigBaseLogInfoCreate) { 
        this['access_config_name'] = accessConfigName;
        this['access_config_type'] = accessConfigType;
        this['access_config_detail'] = accessConfigDetail;
        this['log_info'] = logInfo;
    }
    public withAccessConfigName(accessConfigName: string): CreateAccessConfigRequestBody {
        this['access_config_name'] = accessConfigName;
        return this;
    }
    public set accessConfigName(accessConfigName: string  | undefined) {
        this['access_config_name'] = accessConfigName;
    }
    public get accessConfigName(): string | undefined {
        return this['access_config_name'];
    }
    public withAccessConfigType(accessConfigType: CreateAccessConfigRequestBodyAccessConfigTypeEnum | string): CreateAccessConfigRequestBody {
        this['access_config_type'] = accessConfigType;
        return this;
    }
    public set accessConfigType(accessConfigType: CreateAccessConfigRequestBodyAccessConfigTypeEnum | string  | undefined) {
        this['access_config_type'] = accessConfigType;
    }
    public get accessConfigType(): CreateAccessConfigRequestBodyAccessConfigTypeEnum | string | undefined {
        return this['access_config_type'];
    }
    public withAccessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate): CreateAccessConfigRequestBody {
        this['access_config_detail'] = accessConfigDetail;
        return this;
    }
    public set accessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate  | undefined) {
        this['access_config_detail'] = accessConfigDetail;
    }
    public get accessConfigDetail(): AccessConfigDeatilCreate | undefined {
        return this['access_config_detail'];
    }
    public withLogInfo(logInfo: AccessConfigBaseLogInfoCreate): CreateAccessConfigRequestBody {
        this['log_info'] = logInfo;
        return this;
    }
    public set logInfo(logInfo: AccessConfigBaseLogInfoCreate  | undefined) {
        this['log_info'] = logInfo;
    }
    public get logInfo(): AccessConfigBaseLogInfoCreate | undefined {
        return this['log_info'];
    }
    public withHostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdListCreate): CreateAccessConfigRequestBody {
        this['host_group_info'] = hostGroupInfo;
        return this;
    }
    public set hostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdListCreate  | undefined) {
        this['host_group_info'] = hostGroupInfo;
    }
    public get hostGroupInfo(): AccessConfigHostGroupIdListCreate | undefined {
        return this['host_group_info'];
    }
    public withAccessConfigTag(accessConfigTag: Array<AccessConfigTag>): CreateAccessConfigRequestBody {
        this['access_config_tag'] = accessConfigTag;
        return this;
    }
    public set accessConfigTag(accessConfigTag: Array<AccessConfigTag>  | undefined) {
        this['access_config_tag'] = accessConfigTag;
    }
    public get accessConfigTag(): Array<AccessConfigTag> | undefined {
        return this['access_config_tag'];
    }
    public withBinaryCollect(binaryCollect: boolean): CreateAccessConfigRequestBody {
        this['binary_collect'] = binaryCollect;
        return this;
    }
    public set binaryCollect(binaryCollect: boolean  | undefined) {
        this['binary_collect'] = binaryCollect;
    }
    public get binaryCollect(): boolean | undefined {
        return this['binary_collect'];
    }
    public withLogSplit(logSplit: boolean): CreateAccessConfigRequestBody {
        this['log_split'] = logSplit;
        return this;
    }
    public set logSplit(logSplit: boolean  | undefined) {
        this['log_split'] = logSplit;
    }
    public get logSplit(): boolean | undefined {
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
