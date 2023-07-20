import { DeploymentHostAuthorizationBody } from './DeploymentHostAuthorizationBody';
import { DeploymentHostInfo } from './DeploymentHostInfo';
import { PermissionHostDetail } from './PermissionHostDetail';


export class DeploymentHostDetail {
    private 'group_id'?: string;
    private 'host_name'?: string;
    public ip?: string;
    public port?: number;
    public os?: DeploymentHostDetailOsEnum | string;
    private 'as_proxy'?: boolean;
    private 'proxy_host_id'?: string;
    public authorization?: DeploymentHostAuthorizationBody;
    private 'install_icagent'?: boolean;
    private 'host_id'?: string;
    private 'proxy_host'?: DeploymentHostDetail;
    private 'group_name'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public permission?: PermissionHostDetail;
    private 'update_time'?: string;
    private 'lastest_connection_time'?: string;
    private 'connection_status'?: string;
    private 'owner_name'?: string;
    private 'updator_id'?: string;
    private 'create_time'?: string;
    private 'nick_name'?: string;
    private 'owner_id'?: string;
    private 'updator_name'?: string;
    private 'connection_result'?: string;
    public constructor(groupId?: string, hostName?: string, ip?: string, port?: number, os?: string, asProxy?: boolean, authorization?: DeploymentHostAuthorizationBody) { 
        this['group_id'] = groupId;
        this['host_name'] = hostName;
        this['ip'] = ip;
        this['port'] = port;
        this['os'] = os;
        this['as_proxy'] = asProxy;
        this['authorization'] = authorization;
    }
    public withGroupId(groupId: string): DeploymentHostDetail {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostName(hostName: string): DeploymentHostDetail {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withIp(ip: string): DeploymentHostDetail {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): DeploymentHostDetail {
        this['port'] = port;
        return this;
    }
    public withOs(os: DeploymentHostDetailOsEnum | string): DeploymentHostDetail {
        this['os'] = os;
        return this;
    }
    public withAsProxy(asProxy: boolean): DeploymentHostDetail {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
    public withProxyHostId(proxyHostId: string): DeploymentHostDetail {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string  | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId(): string | undefined {
        return this['proxy_host_id'];
    }
    public withAuthorization(authorization: DeploymentHostAuthorizationBody): DeploymentHostDetail {
        this['authorization'] = authorization;
        return this;
    }
    public withInstallIcagent(installIcagent: boolean): DeploymentHostDetail {
        this['install_icagent'] = installIcagent;
        return this;
    }
    public set installIcagent(installIcagent: boolean  | undefined) {
        this['install_icagent'] = installIcagent;
    }
    public get installIcagent(): boolean | undefined {
        return this['install_icagent'];
    }
    public withHostId(hostId: string): DeploymentHostDetail {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withProxyHost(proxyHost: DeploymentHostDetail): DeploymentHostDetail {
        this['proxy_host'] = proxyHost;
        return this;
    }
    public set proxyHost(proxyHost: DeploymentHostDetail  | undefined) {
        this['proxy_host'] = proxyHost;
    }
    public get proxyHost(): DeploymentHostDetail | undefined {
        return this['proxy_host'];
    }
    public withGroupName(groupName: string): DeploymentHostDetail {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withProjectId(projectId: string): DeploymentHostDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): DeploymentHostDetail {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withPermission(permission: PermissionHostDetail): DeploymentHostDetail {
        this['permission'] = permission;
        return this;
    }
    public withUpdateTime(updateTime: string): DeploymentHostDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withLastestConnectionTime(lastestConnectionTime: string): DeploymentHostDetail {
        this['lastest_connection_time'] = lastestConnectionTime;
        return this;
    }
    public set lastestConnectionTime(lastestConnectionTime: string  | undefined) {
        this['lastest_connection_time'] = lastestConnectionTime;
    }
    public get lastestConnectionTime(): string | undefined {
        return this['lastest_connection_time'];
    }
    public withConnectionStatus(connectionStatus: string): DeploymentHostDetail {
        this['connection_status'] = connectionStatus;
        return this;
    }
    public set connectionStatus(connectionStatus: string  | undefined) {
        this['connection_status'] = connectionStatus;
    }
    public get connectionStatus(): string | undefined {
        return this['connection_status'];
    }
    public withOwnerName(ownerName: string): DeploymentHostDetail {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withUpdatorId(updatorId: string): DeploymentHostDetail {
        this['updator_id'] = updatorId;
        return this;
    }
    public set updatorId(updatorId: string  | undefined) {
        this['updator_id'] = updatorId;
    }
    public get updatorId(): string | undefined {
        return this['updator_id'];
    }
    public withCreateTime(createTime: string): DeploymentHostDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withNickName(nickName: string): DeploymentHostDetail {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withOwnerId(ownerId: string): DeploymentHostDetail {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string  | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId(): string | undefined {
        return this['owner_id'];
    }
    public withUpdatorName(updatorName: string): DeploymentHostDetail {
        this['updator_name'] = updatorName;
        return this;
    }
    public set updatorName(updatorName: string  | undefined) {
        this['updator_name'] = updatorName;
    }
    public get updatorName(): string | undefined {
        return this['updator_name'];
    }
    public withConnectionResult(connectionResult: string): DeploymentHostDetail {
        this['connection_result'] = connectionResult;
        return this;
    }
    public set connectionResult(connectionResult: string  | undefined) {
        this['connection_result'] = connectionResult;
    }
    public get connectionResult(): string | undefined {
        return this['connection_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeploymentHostDetailOsEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
