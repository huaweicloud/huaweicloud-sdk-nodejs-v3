import { EnvironmentHostPermission } from './EnvironmentHostPermission';


export class EnvironmentHostInfo {
    private 'host_id'?: string;
    public ip?: string;
    public port?: number;
    public permission?: EnvironmentHostPermission;
    private 'group_id'?: string;
    private 'host_name'?: string;
    private 'as_proxy'?: boolean;
    private 'proxy_host_id'?: string;
    private 'proxy_host_name'?: string;
    private 'owner_id'?: string;
    private 'owner_name'?: string;
    private 'connection_status'?: string;
    private 'lastest_connection_time'?: string;
    private 'connection_result'?: string;
    private 'nick_name'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): EnvironmentHostInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withIp(ip: string): EnvironmentHostInfo {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): EnvironmentHostInfo {
        this['port'] = port;
        return this;
    }
    public withPermission(permission: EnvironmentHostPermission): EnvironmentHostInfo {
        this['permission'] = permission;
        return this;
    }
    public withGroupId(groupId: string): EnvironmentHostInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostName(hostName: string): EnvironmentHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withAsProxy(asProxy: boolean): EnvironmentHostInfo {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
    public withProxyHostId(proxyHostId: string): EnvironmentHostInfo {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string  | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId(): string | undefined {
        return this['proxy_host_id'];
    }
    public withProxyHostName(proxyHostName: string): EnvironmentHostInfo {
        this['proxy_host_name'] = proxyHostName;
        return this;
    }
    public set proxyHostName(proxyHostName: string  | undefined) {
        this['proxy_host_name'] = proxyHostName;
    }
    public get proxyHostName(): string | undefined {
        return this['proxy_host_name'];
    }
    public withOwnerId(ownerId: string): EnvironmentHostInfo {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withOwnerName(ownerName: string): EnvironmentHostInfo {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withConnectionStatus(connectionStatus: string): EnvironmentHostInfo {
        this['connection_status'] = connectionStatus;
        return this;
    }
    public set connectionStatus(connectionStatus: string  | undefined) {
        this['connection_status'] = connectionStatus;
    }
    public get connectionStatus(): string | undefined {
        return this['connection_status'];
    }
    public withLastestConnectionTime(lastestConnectionTime: string): EnvironmentHostInfo {
        this['lastest_connection_time'] = lastestConnectionTime;
        return this;
    }
    public set lastestConnectionTime(lastestConnectionTime: string  | undefined) {
        this['lastest_connection_time'] = lastestConnectionTime;
    }
    public get lastestConnectionTime(): string | undefined {
        return this['lastest_connection_time'];
    }
    public withConnectionResult(connectionResult: string): EnvironmentHostInfo {
        this['connection_result'] = connectionResult;
        return this;
    }
    public set connectionResult(connectionResult: string  | undefined) {
        this['connection_result'] = connectionResult;
    }
    public get connectionResult(): string | undefined {
        return this['connection_result'];
    }
    public withNickName(nickName: string): EnvironmentHostInfo {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
}