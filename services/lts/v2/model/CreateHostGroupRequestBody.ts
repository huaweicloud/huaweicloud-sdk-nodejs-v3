import { HostGroupTag } from './HostGroupTag';


export class CreateHostGroupRequestBody {
    private 'host_group_name'?: string;
    private 'host_group_type'?: CreateHostGroupRequestBodyHostGroupTypeEnum | string;
    private 'host_id_list'?: Array<string>;
    private 'host_group_tag'?: Array<HostGroupTag>;
    public constructor(hostGroupName?: string, hostGroupType?: string) { 
        this['host_group_name'] = hostGroupName;
        this['host_group_type'] = hostGroupType;
    }
    public withHostGroupName(hostGroupName: string): CreateHostGroupRequestBody {
        this['host_group_name'] = hostGroupName;
        return this;
    }
    public set hostGroupName(hostGroupName: string  | undefined) {
        this['host_group_name'] = hostGroupName;
    }
    public get hostGroupName(): string | undefined {
        return this['host_group_name'];
    }
    public withHostGroupType(hostGroupType: CreateHostGroupRequestBodyHostGroupTypeEnum | string): CreateHostGroupRequestBody {
        this['host_group_type'] = hostGroupType;
        return this;
    }
    public set hostGroupType(hostGroupType: CreateHostGroupRequestBodyHostGroupTypeEnum | string  | undefined) {
        this['host_group_type'] = hostGroupType;
    }
    public get hostGroupType(): CreateHostGroupRequestBodyHostGroupTypeEnum | string | undefined {
        return this['host_group_type'];
    }
    public withHostIdList(hostIdList: Array<string>): CreateHostGroupRequestBody {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withHostGroupTag(hostGroupTag: Array<HostGroupTag>): CreateHostGroupRequestBody {
        this['host_group_tag'] = hostGroupTag;
        return this;
    }
    public set hostGroupTag(hostGroupTag: Array<HostGroupTag>  | undefined) {
        this['host_group_tag'] = hostGroupTag;
    }
    public get hostGroupTag(): Array<HostGroupTag> | undefined {
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
