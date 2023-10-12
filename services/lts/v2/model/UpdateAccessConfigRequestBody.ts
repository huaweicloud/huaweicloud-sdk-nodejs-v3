import { AccessConfigDeatilUpdate } from './AccessConfigDeatilUpdate';
import { AccessConfigHostGroupIdList } from './AccessConfigHostGroupIdList';
import { AccessConfigTag } from './AccessConfigTag';


export class UpdateAccessConfigRequestBody {
    private 'access_config_id'?: string;
    private 'access_config_detail'?: AccessConfigDeatilUpdate;
    private 'host_group_info'?: AccessConfigHostGroupIdList;
    private 'access_config_tag'?: Array<AccessConfigTag>;
    private 'log_split'?: boolean;
    private 'binary_collect'?: boolean;
    private 'cluster_id'?: string;
    public constructor(accessConfigId?: string) { 
        this['access_config_id'] = accessConfigId;
    }
    public withAccessConfigId(accessConfigId: string): UpdateAccessConfigRequestBody {
        this['access_config_id'] = accessConfigId;
        return this;
    }
    public set accessConfigId(accessConfigId: string  | undefined) {
        this['access_config_id'] = accessConfigId;
    }
    public get accessConfigId(): string | undefined {
        return this['access_config_id'];
    }
    public withAccessConfigDetail(accessConfigDetail: AccessConfigDeatilUpdate): UpdateAccessConfigRequestBody {
        this['access_config_detail'] = accessConfigDetail;
        return this;
    }
    public set accessConfigDetail(accessConfigDetail: AccessConfigDeatilUpdate  | undefined) {
        this['access_config_detail'] = accessConfigDetail;
    }
    public get accessConfigDetail(): AccessConfigDeatilUpdate | undefined {
        return this['access_config_detail'];
    }
    public withHostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdList): UpdateAccessConfigRequestBody {
        this['host_group_info'] = hostGroupInfo;
        return this;
    }
    public set hostGroupInfo(hostGroupInfo: AccessConfigHostGroupIdList  | undefined) {
        this['host_group_info'] = hostGroupInfo;
    }
    public get hostGroupInfo(): AccessConfigHostGroupIdList | undefined {
        return this['host_group_info'];
    }
    public withAccessConfigTag(accessConfigTag: Array<AccessConfigTag>): UpdateAccessConfigRequestBody {
        this['access_config_tag'] = accessConfigTag;
        return this;
    }
    public set accessConfigTag(accessConfigTag: Array<AccessConfigTag>  | undefined) {
        this['access_config_tag'] = accessConfigTag;
    }
    public get accessConfigTag(): Array<AccessConfigTag> | undefined {
        return this['access_config_tag'];
    }
    public withLogSplit(logSplit: boolean): UpdateAccessConfigRequestBody {
        this['log_split'] = logSplit;
        return this;
    }
    public set logSplit(logSplit: boolean  | undefined) {
        this['log_split'] = logSplit;
    }
    public get logSplit(): boolean | undefined {
        return this['log_split'];
    }
    public withBinaryCollect(binaryCollect: boolean): UpdateAccessConfigRequestBody {
        this['binary_collect'] = binaryCollect;
        return this;
    }
    public set binaryCollect(binaryCollect: boolean  | undefined) {
        this['binary_collect'] = binaryCollect;
    }
    public get binaryCollect(): boolean | undefined {
        return this['binary_collect'];
    }
    public withClusterId(clusterId: string): UpdateAccessConfigRequestBody {
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