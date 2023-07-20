import { InstanceReplicationListInfo } from './InstanceReplicationListInfo';


export class InstanceGroupListInfo {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'replication_list'?: Array<InstanceReplicationListInfo>;
    public constructor() { 
    }
    public withGroupId(groupId: string): InstanceGroupListInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): InstanceGroupListInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withReplicationList(replicationList: Array<InstanceReplicationListInfo>): InstanceGroupListInfo {
        this['replication_list'] = replicationList;
        return this;
    }
    public set replicationList(replicationList: Array<InstanceReplicationListInfo>  | undefined) {
        this['replication_list'] = replicationList;
    }
    public get replicationList(): Array<InstanceReplicationListInfo> | undefined {
        return this['replication_list'];
    }
}