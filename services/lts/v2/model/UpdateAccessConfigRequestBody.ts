import { AccessConfigDeatilCreate } from './AccessConfigDeatilCreate';
import { AccessConfigHostGroupIdList } from './AccessConfigHostGroupIdList';
import { AccessConfigTag } from './AccessConfigTag';


export class UpdateAccessConfigRequestBody {
    private 'access_config_id': string | undefined;
    private 'access_config_detail'?: AccessConfigDeatilCreate | undefined;
    private 'host_group_info'?: AccessConfigHostGroupIdList | undefined;
    private 'access_config_tag'?: Array<AccessConfigTag> | undefined;
    private 'log_split'?: boolean | undefined;
    private 'binary_collect'?: boolean | undefined;
    public constructor(accessConfigId?: any) { 
        this['access_config_id'] = accessConfigId;
    }
    public withAccessConfigId(accessConfigId: string): UpdateAccessConfigRequestBody {
        this['access_config_id'] = accessConfigId;
        return this;
    }
    public set accessConfigId(accessConfigId: string | undefined) {
        this['access_config_id'] = accessConfigId;
    }
    public get accessConfigId() {
        return this['access_config_id'];
    }
    public withAccessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate): UpdateAccessConfigRequestBody {
        this['access_config_detail'] = accessConfigDetail;
        return this;
    }
    public set accessConfigDetail(accessConfigDetail: AccessConfigDeatilCreate | undefined) {
        this['access_config_detail'] = accessConfigDetail;
    }
    public get accessConfigDetail() {
        return this['access_config_detail'];
    }
    public withHostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdList): UpdateAccessConfigRequestBody {
        this['host_group_info'] = hostGroupInfo;
        return this;
    }
    public set hostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdList | undefined) {
        this['host_group_info'] = hostGroupInfo;
    }
    public get hostGroupInfo() {
        return this['host_group_info'];
    }
    public withAccessConfigTag(accessConfigTag: Array<AccessConfigTag>): UpdateAccessConfigRequestBody {
        this['access_config_tag'] = accessConfigTag;
        return this;
    }
    public set accessConfigTag(accessConfigTag: Array<AccessConfigTag> | undefined) {
        this['access_config_tag'] = accessConfigTag;
    }
    public get accessConfigTag() {
        return this['access_config_tag'];
    }
    public withLogSplit(logSplit: boolean): UpdateAccessConfigRequestBody {
        this['log_split'] = logSplit;
        return this;
    }
    public set logSplit(logSplit: boolean | undefined) {
        this['log_split'] = logSplit;
    }
    public get logSplit() {
        return this['log_split'];
    }
    public withBinaryCollect(binaryCollect: boolean): UpdateAccessConfigRequestBody {
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