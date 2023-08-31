import { PermissionClusterDetail } from './PermissionClusterDetail';
import { UserInfo } from './UserInfo';


export class HostClusterInfoDetail {
    public id?: string;
    public name?: string;
    public os?: string;
    private 'slave_cluster_id'?: string;
    private 'created_by'?: UserInfo;
    public description?: string;
    public permission?: PermissionClusterDetail;
    private 'nick_name'?: string;
    private 'is_proxy_mode'?: number;
    private 'created_time'?: string;
    private 'updated_time'?: string;
    public constructor() { 
    }
    public withId(id: string): HostClusterInfoDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): HostClusterInfoDetail {
        this['name'] = name;
        return this;
    }
    public withOs(os: string): HostClusterInfoDetail {
        this['os'] = os;
        return this;
    }
    public withSlaveClusterId(slaveClusterId: string): HostClusterInfoDetail {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withCreatedBy(createdBy: UserInfo): HostClusterInfoDetail {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserInfo  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserInfo | undefined {
        return this['created_by'];
    }
    public withDescription(description: string): HostClusterInfoDetail {
        this['description'] = description;
        return this;
    }
    public withPermission(permission: PermissionClusterDetail): HostClusterInfoDetail {
        this['permission'] = permission;
        return this;
    }
    public withNickName(nickName: string): HostClusterInfoDetail {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withIsProxyMode(isProxyMode: number): HostClusterInfoDetail {
        this['is_proxy_mode'] = isProxyMode;
        return this;
    }
    public set isProxyMode(isProxyMode: number  | undefined) {
        this['is_proxy_mode'] = isProxyMode;
    }
    public get isProxyMode(): number | undefined {
        return this['is_proxy_mode'];
    }
    public withCreatedTime(createdTime: string): HostClusterInfoDetail {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: string): HostClusterInfoDetail {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: string  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): string | undefined {
        return this['updated_time'];
    }
}