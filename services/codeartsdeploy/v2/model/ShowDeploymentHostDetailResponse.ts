import { DeploymentHostAuthorizationBody } from './DeploymentHostAuthorizationBody';
import { DeploymentHostDetail } from './DeploymentHostDetail';
import { DeploymentHostInfo } from './DeploymentHostInfo';
import { PermissionHostDetail } from './PermissionHostDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeploymentHostDetailResponse extends SdkResponse {
    private 'group_id': string | undefined;
    private 'host_name': string | undefined;
    public ip: string;
    public port: number;
    public os: ShowDeploymentHostDetailResponseOsEnum;
    private 'as_proxy': boolean | undefined;
    private 'proxy_host_id'?: string | undefined;
    public authorization: DeploymentHostAuthorizationBody;
    private 'install_icagent'?: boolean | undefined;
    private 'host_id'?: string | undefined;
    private 'proxy_host'?: DeploymentHostDetail | undefined;
    private 'group_name'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'project_name'?: string | undefined;
    public permission?: PermissionHostDetail;
    private 'update_time'?: string | undefined;
    private 'lastest_connection_time'?: string | undefined;
    private 'connection_status'?: string | undefined;
    private 'owner_name'?: string | undefined;
    private 'updator_id'?: string | undefined;
    private 'create_time'?: string | undefined;
    private 'nick_name'?: string | undefined;
    private 'owner_id'?: string | undefined;
    private 'updator_name'?: string | undefined;
    private 'connection_result'?: string | undefined;
    public constructor(groupId?: any, hostName?: any, ip?: any, port?: any, os?: any, asProxy?: any, authorization?: any) { 
        super();
        this['group_id'] = groupId;
        this['host_name'] = hostName;
        this['ip'] = ip;
        this['port'] = port;
        this['os'] = os;
        this['as_proxy'] = asProxy;
        this['authorization'] = authorization;
    }
    public withGroupId(groupId: string): ShowDeploymentHostDetailResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withHostName(hostName: string): ShowDeploymentHostDetailResponse {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName() {
        return this['host_name'];
    }
    public withIp(ip: string): ShowDeploymentHostDetailResponse {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): ShowDeploymentHostDetailResponse {
        this['port'] = port;
        return this;
    }
    public withOs(os: ShowDeploymentHostDetailResponseOsEnum): ShowDeploymentHostDetailResponse {
        this['os'] = os;
        return this;
    }
    public withAsProxy(asProxy: boolean): ShowDeploymentHostDetailResponse {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy() {
        return this['as_proxy'];
    }
    public withProxyHostId(proxyHostId: string): ShowDeploymentHostDetailResponse {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId() {
        return this['proxy_host_id'];
    }
    public withAuthorization(authorization: DeploymentHostAuthorizationBody): ShowDeploymentHostDetailResponse {
        this['authorization'] = authorization;
        return this;
    }
    public withInstallIcagent(installIcagent: boolean): ShowDeploymentHostDetailResponse {
        this['install_icagent'] = installIcagent;
        return this;
    }
    public set installIcagent(installIcagent: boolean | undefined) {
        this['install_icagent'] = installIcagent;
    }
    public get installIcagent() {
        return this['install_icagent'];
    }
    public withHostId(hostId: string): ShowDeploymentHostDetailResponse {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId() {
        return this['host_id'];
    }
    public withProxyHost(proxyHost: DeploymentHostDetail): ShowDeploymentHostDetailResponse {
        this['proxy_host'] = proxyHost;
        return this;
    }
    public set proxyHost(proxyHost: DeploymentHostDetail | undefined) {
        this['proxy_host'] = proxyHost;
    }
    public get proxyHost() {
        return this['proxy_host'];
    }
    public withGroupName(groupName: string): ShowDeploymentHostDetailResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName() {
        return this['group_name'];
    }
    public withProjectId(projectId: string): ShowDeploymentHostDetailResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ShowDeploymentHostDetailResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withPermission(permission: PermissionHostDetail): ShowDeploymentHostDetailResponse {
        this['permission'] = permission;
        return this;
    }
    public withUpdateTime(updateTime: string): ShowDeploymentHostDetailResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withLastestConnectionTime(lastestConnectionTime: string): ShowDeploymentHostDetailResponse {
        this['lastest_connection_time'] = lastestConnectionTime;
        return this;
    }
    public set lastestConnectionTime(lastestConnectionTime: string | undefined) {
        this['lastest_connection_time'] = lastestConnectionTime;
    }
    public get lastestConnectionTime() {
        return this['lastest_connection_time'];
    }
    public withConnectionStatus(connectionStatus: string): ShowDeploymentHostDetailResponse {
        this['connection_status'] = connectionStatus;
        return this;
    }
    public set connectionStatus(connectionStatus: string | undefined) {
        this['connection_status'] = connectionStatus;
    }
    public get connectionStatus() {
        return this['connection_status'];
    }
    public withOwnerName(ownerName: string): ShowDeploymentHostDetailResponse {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName() {
        return this['owner_name'];
    }
    public withUpdatorId(updatorId: string): ShowDeploymentHostDetailResponse {
        this['updator_id'] = updatorId;
        return this;
    }
    public set updatorId(updatorId: string | undefined) {
        this['updator_id'] = updatorId;
    }
    public get updatorId() {
        return this['updator_id'];
    }
    public withCreateTime(createTime: string): ShowDeploymentHostDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withNickName(nickName: string): ShowDeploymentHostDetailResponse {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName() {
        return this['nick_name'];
    }
    public withOwnerId(ownerId: string): ShowDeploymentHostDetailResponse {
        this['owner_id'] = ownerId;
        return this;
    }
    public set ownerId(ownerId: string | undefined) {
        this['owner_id'] = ownerId;
    }
    public get ownerId() {
        return this['owner_id'];
    }
    public withUpdatorName(updatorName: string): ShowDeploymentHostDetailResponse {
        this['updator_name'] = updatorName;
        return this;
    }
    public set updatorName(updatorName: string | undefined) {
        this['updator_name'] = updatorName;
    }
    public get updatorName() {
        return this['updator_name'];
    }
    public withConnectionResult(connectionResult: string): ShowDeploymentHostDetailResponse {
        this['connection_result'] = connectionResult;
        return this;
    }
    public set connectionResult(connectionResult: string | undefined) {
        this['connection_result'] = connectionResult;
    }
    public get connectionResult() {
        return this['connection_result'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDeploymentHostDetailResponseOsEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
