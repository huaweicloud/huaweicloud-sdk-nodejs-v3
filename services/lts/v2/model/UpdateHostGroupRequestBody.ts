import { HostGroupTag } from './HostGroupTag';


export class UpdateHostGroupRequestBody {
    private 'host_group_id'?: string;
    private 'host_group_name'?: string;
    private 'host_id_list'?: Array<string>;
    private 'host_group_tag'?: Array<HostGroupTag>;
    public constructor(hostGroupId?: string) { 
        this['host_group_id'] = hostGroupId;
    }
    public withHostGroupId(hostGroupId: string): UpdateHostGroupRequestBody {
        this['host_group_id'] = hostGroupId;
        return this;
    }
    public set hostGroupId(hostGroupId: string  | undefined) {
        this['host_group_id'] = hostGroupId;
    }
    public get hostGroupId(): string | undefined {
        return this['host_group_id'];
    }
    public withHostGroupName(hostGroupName: string): UpdateHostGroupRequestBody {
        this['host_group_name'] = hostGroupName;
        return this;
    }
    public set hostGroupName(hostGroupName: string  | undefined) {
        this['host_group_name'] = hostGroupName;
    }
    public get hostGroupName(): string | undefined {
        return this['host_group_name'];
    }
    public withHostIdList(hostIdList: Array<string>): UpdateHostGroupRequestBody {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withHostGroupTag(hostGroupTag: Array<HostGroupTag>): UpdateHostGroupRequestBody {
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