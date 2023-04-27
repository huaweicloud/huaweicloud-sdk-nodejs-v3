import { HostGroupTag } from './HostGroupTag';


export class GetHostGroupInfo {
    private 'host_group_id'?: string | undefined;
    private 'host_group_name'?: string | undefined;
    private 'host_group_type'?: GetHostGroupInfoHostGroupTypeEnum | undefined;
    private 'host_id_list'?: Array<string> | undefined;
    private 'host_group_tag'?: Array<HostGroupTag> | undefined;
    private 'create_time'?: number | undefined;
    private 'update_time'?: number | undefined;
    public constructor() { 
    }
    public withHostGroupId(hostGroupId: string): GetHostGroupInfo {
        this['host_group_id'] = hostGroupId;
        return this;
    }
    public set hostGroupId(hostGroupId: string | undefined) {
        this['host_group_id'] = hostGroupId;
    }
    public get hostGroupId() {
        return this['host_group_id'];
    }
    public withHostGroupName(hostGroupName: string): GetHostGroupInfo {
        this['host_group_name'] = hostGroupName;
        return this;
    }
    public set hostGroupName(hostGroupName: string | undefined) {
        this['host_group_name'] = hostGroupName;
    }
    public get hostGroupName() {
        return this['host_group_name'];
    }
    public withHostGroupType(hostGroupType: GetHostGroupInfoHostGroupTypeEnum): GetHostGroupInfo {
        this['host_group_type'] = hostGroupType;
        return this;
    }
    public set hostGroupType(hostGroupType: GetHostGroupInfoHostGroupTypeEnum | undefined) {
        this['host_group_type'] = hostGroupType;
    }
    public get hostGroupType() {
        return this['host_group_type'];
    }
    public withHostIdList(hostIdList: Array<string>): GetHostGroupInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string> | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList() {
        return this['host_id_list'];
    }
    public withHostGroupTag(hostGroupTag: Array<HostGroupTag>): GetHostGroupInfo {
        this['host_group_tag'] = hostGroupTag;
        return this;
    }
    public set hostGroupTag(hostGroupTag: Array<HostGroupTag> | undefined) {
        this['host_group_tag'] = hostGroupTag;
    }
    public get hostGroupTag() {
        return this['host_group_tag'];
    }
    public withCreateTime(createTime: number): GetHostGroupInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): GetHostGroupInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetHostGroupInfoHostGroupTypeEnum {
    LINUX = 'linux',
    WINDOWS = 'windows'
}
