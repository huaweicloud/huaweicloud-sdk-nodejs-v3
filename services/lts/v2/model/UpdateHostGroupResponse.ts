import { HostGroupTag } from './HostGroupTag';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateHostGroupResponse extends SdkResponse {
    private 'host_group_id'?: string;
    private 'host_group_name'?: string;
    private 'host_group_type'?: UpdateHostGroupResponseHostGroupTypeEnum | string;
    private 'host_id_list'?: Array<string>;
    private 'host_group_tag'?: Array<HostGroupTag>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'agent_access_type'?: string;
    public labels?: Array<string>;
    public constructor() { 
        super();
    }
    public withHostGroupId(hostGroupId: string): UpdateHostGroupResponse {
        this['host_group_id'] = hostGroupId;
        return this;
    }
    public set hostGroupId(hostGroupId: string  | undefined) {
        this['host_group_id'] = hostGroupId;
    }
    public get hostGroupId(): string | undefined {
        return this['host_group_id'];
    }
    public withHostGroupName(hostGroupName: string): UpdateHostGroupResponse {
        this['host_group_name'] = hostGroupName;
        return this;
    }
    public set hostGroupName(hostGroupName: string  | undefined) {
        this['host_group_name'] = hostGroupName;
    }
    public get hostGroupName(): string | undefined {
        return this['host_group_name'];
    }
    public withHostGroupType(hostGroupType: UpdateHostGroupResponseHostGroupTypeEnum | string): UpdateHostGroupResponse {
        this['host_group_type'] = hostGroupType;
        return this;
    }
    public set hostGroupType(hostGroupType: UpdateHostGroupResponseHostGroupTypeEnum | string  | undefined) {
        this['host_group_type'] = hostGroupType;
    }
    public get hostGroupType(): UpdateHostGroupResponseHostGroupTypeEnum | string | undefined {
        return this['host_group_type'];
    }
    public withHostIdList(hostIdList: Array<string>): UpdateHostGroupResponse {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withHostGroupTag(hostGroupTag: Array<HostGroupTag>): UpdateHostGroupResponse {
        this['host_group_tag'] = hostGroupTag;
        return this;
    }
    public set hostGroupTag(hostGroupTag: Array<HostGroupTag>  | undefined) {
        this['host_group_tag'] = hostGroupTag;
    }
    public get hostGroupTag(): Array<HostGroupTag> | undefined {
        return this['host_group_tag'];
    }
    public withCreateTime(createTime: number): UpdateHostGroupResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): UpdateHostGroupResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withAgentAccessType(agentAccessType: string): UpdateHostGroupResponse {
        this['agent_access_type'] = agentAccessType;
        return this;
    }
    public set agentAccessType(agentAccessType: string  | undefined) {
        this['agent_access_type'] = agentAccessType;
    }
    public get agentAccessType(): string | undefined {
        return this['agent_access_type'];
    }
    public withLabels(labels: Array<string>): UpdateHostGroupResponse {
        this['labels'] = labels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHostGroupResponseHostGroupTypeEnum {
    LINUX = 'linux',
    WINDOWS = 'windows'
}
