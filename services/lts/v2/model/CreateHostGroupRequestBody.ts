import { HostGroupTag } from './HostGroupTag';


export class CreateHostGroupRequestBody {
    private 'host_group_name': string | undefined;
    private 'host_group_type': CreateHostGroupRequestBodyHostGroupTypeEnum | undefined;
    private 'host_id_list'?: Array<string> | undefined;
    private 'host_group_tag'?: Array<HostGroupTag> | undefined;
    public constructor(hostGroupName?: any, hostGroupType?: any) { 
        this['host_group_name'] = hostGroupName;
        this['host_group_type'] = hostGroupType;
    }
    public withHostGroupName(hostGroupName: string): CreateHostGroupRequestBody {
        this['host_group_name'] = hostGroupName;
        return this;
    }
    public set hostGroupName(hostGroupName: string | undefined) {
        this['host_group_name'] = hostGroupName;
    }
    public get hostGroupName() {
        return this['host_group_name'];
    }
    public withHostGroupType(hostGroupType: CreateHostGroupRequestBodyHostGroupTypeEnum): CreateHostGroupRequestBody {
        this['host_group_type'] = hostGroupType;
        return this;
    }
    public set hostGroupType(hostGroupType: CreateHostGroupRequestBodyHostGroupTypeEnum | undefined) {
        this['host_group_type'] = hostGroupType;
    }
    public get hostGroupType() {
        return this['host_group_type'];
    }
    public withHostIdList(hostIdList: Array<string>): CreateHostGroupRequestBody {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string> | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList() {
        return this['host_id_list'];
    }
    public withHostGroupTag(hostGroupTag: Array<HostGroupTag>): CreateHostGroupRequestBody {
        this['host_group_tag'] = hostGroupTag;
        return this;
    }
    public set hostGroupTag(hostGroupTag: Array<HostGroupTag> | undefined) {
        this['host_group_tag'] = hostGroupTag;
    }
    public get hostGroupTag() {
        return this['host_group_tag'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHostGroupRequestBodyHostGroupTypeEnum {
    LINUX = 'linux',
    WINDOWS = 'windows'
}
