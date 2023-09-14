import { HostAuthorizationBody } from './HostAuthorizationBody';
import { PermissionHostDetailNew } from './PermissionHostDetailNew';


export class HostInfoDetail {
    private 'host_id'?: string;
    public ip?: string;
    public os?: string;
    public port?: number;
    public authorization?: HostAuthorizationBody;
    public permission?: PermissionHostDetailNew;
    private 'group_id'?: string;
    private 'host_name'?: string;
    private 'as_proxy'?: boolean;
    private 'proxy_host_id'?: string;
    private 'owner_name'?: string;
    private 'proxy_host'?: HostInfoDetail;
    private 'connection_status'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'lastest_connection_time'?: string;
    private 'connection_result'?: string;
    private 'install_icagent'?: boolean;
    private 'nick_name'?: string;
    public constructor() { 
    }
    public withHostId(hostId: string): HostInfoDetail {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withIp(ip: string): HostInfoDetail {
        this['ip'] = ip;
        return this;
    }
    public withOs(os: string): HostInfoDetail {
        this['os'] = os;
        return this;
    }
    public withPort(port: number): HostInfoDetail {
        this['port'] = port;
        return this;
    }
    public withAuthorization(authorization: HostAuthorizationBody): HostInfoDetail {
        this['authorization'] = authorization;
        return this;
    }
    public withPermission(permission: PermissionHostDetailNew): HostInfoDetail {
        this['permission'] = permission;
        return this;
    }
    public withGroupId(groupId: string): HostInfoDetail {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostName(hostName: string): HostInfoDetail {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withAsProxy(asProxy: boolean): HostInfoDetail {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
    public withProxyHostId(proxyHostId: string): HostInfoDetail {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string  | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId(): string | undefined {
        return this['proxy_host_id'];
    }
    public withOwnerName(ownerName: string): HostInfoDetail {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withProxyHost(proxyHost: HostInfoDetail): HostInfoDetail {
        this['proxy_host'] = proxyHost;
        return this;
    }
    public set proxyHost(proxyHost: HostInfoDetail  | undefined) {
        this['proxy_host'] = proxyHost;
    }
    public get proxyHost(): HostInfoDetail | undefined {
        return this['proxy_host'];
    }
    public withConnectionStatus(connectionStatus: string): HostInfoDetail {
        this['connection_status'] = connectionStatus;
        return this;
    }
    public set connectionStatus(connectionStatus: string  | undefined) {
        this['connection_status'] = connectionStatus;
    }
    public get connectionStatus(): string | undefined {
        return this['connection_status'];
    }
    public withCreateTime(createTime: string): HostInfoDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): HostInfoDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withLastestConnectionTime(lastestConnectionTime: string): HostInfoDetail {
        this['lastest_connection_time'] = lastestConnectionTime;
        return this;
    }
    public set lastestConnectionTime(lastestConnectionTime: string  | undefined) {
        this['lastest_connection_time'] = lastestConnectionTime;
    }
    public get lastestConnectionTime(): string | undefined {
        return this['lastest_connection_time'];
    }
    public withConnectionResult(connectionResult: string): HostInfoDetail {
        this['connection_result'] = connectionResult;
        return this;
    }
    public set connectionResult(connectionResult: string  | undefined) {
        this['connection_result'] = connectionResult;
    }
    public get connectionResult(): string | undefined {
        return this['connection_result'];
    }
    public withInstallIcagent(installIcagent: boolean): HostInfoDetail {
        this['install_icagent'] = installIcagent;
        return this;
    }
    public set installIcagent(installIcagent: boolean  | undefined) {
        this['install_icagent'] = installIcagent;
    }
    public get installIcagent(): boolean | undefined {
        return this['install_icagent'];
    }
    public withNickName(nickName: string): HostInfoDetail {
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