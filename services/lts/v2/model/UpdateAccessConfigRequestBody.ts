import { AccessConfigDeatil } from './AccessConfigDeatil';
import { AccessConfigHostGroupIdList } from './AccessConfigHostGroupIdList';
import { AccessConfigTag } from './AccessConfigTag';


export class UpdateAccessConfigRequestBody {
    private 'access_config_id': string | undefined;
    private 'access_config_detail'?: AccessConfigDeatil | undefined;
    private 'host_group_info'?: AccessConfigHostGroupIdList | undefined;
    private 'access_config_tag'?: Array<AccessConfigTag> | undefined;
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
    public withAccessConfigDetail(accessConfigDetail: AccessConfigDeatil): UpdateAccessConfigRequestBody {
        this['access_config_detail'] = accessConfigDetail;
        return this;
    }
    public set accessConfigDetail(accessConfigDetail: AccessConfigDeatil | undefined) {
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
}