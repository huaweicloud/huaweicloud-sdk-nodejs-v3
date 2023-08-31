import { HostAuthorizationBody } from './HostAuthorizationBody';
import { PermissionHostDetail } from './PermissionHostDetail';


export class HostInfo {
    public uuid?: string;
    public ip?: string;
    public os?: string;
    public port?: number;
    public authorization?: HostAuthorizationBody;
    public permission?: PermissionHostDetail;
    private 'host_name'?: string;
    private 'as_proxy'?: boolean;
    private 'group_id'?: string;
    private 'proxy_host_id'?: string;
    private 'owner_id'?: string;
    private 'owner_name'?: string;
    private 'proxy_host'?: HostInfo;
    private 'connection_status'?: string;
    private 'create_time'?: string;
    private 'lastest_connection_time'?: string;
    private 'connection_result'?: string;
    private 'nick_name'?: string;
    private 'import_status'?: string;
    private 'env_count'?: number;
    public constructor() { 
    }
    public withUuid(uuid: string): HostInfo {
        this['uuid'] = uuid;
        return this;
    }
    public withIp(ip: string): HostInfo {
        this['ip'] = ip;
        return this;
    }
    public withOs(os: string): HostInfo {
        this['os'] = os;
        return this;
    }
    public withPort(port: number): HostInfo {
        this['port'] = port;
        return this;
    }
    public withAuthorization(authorization: HostAuthorizationBody): HostInfo {
        this['authorization'] = authorization;
        return this;
    }
    public withPermission(permission: PermissionHostDetail): HostInfo {
        this['permission'] = permission;
        return this;
    }
    public withHostName(hostName: string): HostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withAsProxy(asProxy: boolean): HostInfo {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
    public withGroupId(groupId: string): HostInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withProxyHostId(proxyHostId: string): HostInfo {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string  | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId(): string | undefined {
        return this['proxy_host_id'];
    }
    public withOwnerId(ownerId: string): HostInfo {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withOwnerName(ownerName: string): HostInfo {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withProxyHost(proxyHost: HostInfo): HostInfo {
        this['proxy_host'] = proxyHost;
        return this;
    }
    public set proxyHost(proxyHost: HostInfo  | undefined) {
        this['proxy_host'] = proxyHost;
    }
    public get proxyHost(): HostInfo | undefined {
        return this['proxy_host'];
    }
    public withConnectionStatus(connectionStatus: string): HostInfo {
        this['connection_status'] = connectionStatus;
        return this;
    }
    public set connectionStatus(connectionStatus: string  | undefined) {
        this['connection_status'] = connectionStatus;
    }
    public get connectionStatus(): string | undefined {
        return this['connection_status'];
    }
    public withCreateTime(createTime: string): HostInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastestConnectionTime(lastestConnectionTime: string): HostInfo {
        this['lastest_connection_time'] = lastestConnectionTime;
        return this;
    }
    public set lastestConnectionTime(lastestConnectionTime: string  | undefined) {
        this['lastest_connection_time'] = lastestConnectionTime;
    }
    public get lastestConnectionTime(): string | undefined {
        return this['lastest_connection_time'];
    }
    public withConnectionResult(connectionResult: string): HostInfo {
        this['connection_result'] = connectionResult;
        return this;
    }
    public set connectionResult(connectionResult: string  | undefined) {
        this['connection_result'] = connectionResult;
    }
    public get connectionResult(): string | undefined {
        return this['connection_result'];
    }
    public withNickName(nickName: string): HostInfo {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withImportStatus(importStatus: string): HostInfo {
        this['import_status'] = importStatus;
        return this;
    }
    public set importStatus(importStatus: string  | undefined) {
        this['import_status'] = importStatus;
    }
    public get importStatus(): string | undefined {
        return this['import_status'];
    }
    public withEnvCount(envCount: number): HostInfo {
        this['env_count'] = envCount;
        return this;
    }
    public set envCount(envCount: number  | undefined) {
        this['env_count'] = envCount;
    }
    public get envCount(): number | undefined {
        return this['env_count'];
    }
}