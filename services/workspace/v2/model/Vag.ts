

export class Vag {
    public id?: string;
    private 'project_id'?: string;
    private 'site_id'?: string;
    private 'vag_ip'?: string;
    private 'private_ip'?: string;
    private 'private_ipv6'?: string;
    private 'vag_port_id'?: string;
    private 'ssh_user'?: string;
    private 'ssh_pwd'?: string;
    private 'vm_id'?: string;
    public name?: string;
    private 'internal_ip'?: string;
    private 'internal_ipv6'?: string;
    private 'internal_port_id'?: string;
    private 'external_ip'?: string;
    private 'external_id'?: string;
    private 'root_user'?: string;
    private 'root_pwd'?: string;
    public status?: string;
    private 'availability_zone'?: string;
    private 'create_time'?: number;
    private 'create_time_str'?: string;
    public state?: string;
    private 'number_of_online_user'?: number;
    private 'running_status'?: string;
    private 'domain_id'?: string;
    public version?: string;
    private 'latest_version'?: string;
    private 'access_edge_version'?: string;
    private 'tenant_lock'?: number;
    private 'resource_pool_id'?: string;
    public role?: string;
    private 'resource_pool_type'?: string;
    private 'edge_sk'?: string;
    private 'has_heartbeat'?: boolean;
    private 'user_count'?: number;
    public constructor() { 
    }
    public withId(id: string): Vag {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): Vag {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSiteId(siteId: string): Vag {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withVagIp(vagIp: string): Vag {
        this['vag_ip'] = vagIp;
        return this;
    }
    public set vagIp(vagIp: string  | undefined) {
        this['vag_ip'] = vagIp;
    }
    public get vagIp(): string | undefined {
        return this['vag_ip'];
    }
    public withPrivateIp(privateIp: string): Vag {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPrivateIpv6(privateIpv6: string): Vag {
        this['private_ipv6'] = privateIpv6;
        return this;
    }
    public set privateIpv6(privateIpv6: string  | undefined) {
        this['private_ipv6'] = privateIpv6;
    }
    public get privateIpv6(): string | undefined {
        return this['private_ipv6'];
    }
    public withVagPortId(vagPortId: string): Vag {
        this['vag_port_id'] = vagPortId;
        return this;
    }
    public set vagPortId(vagPortId: string  | undefined) {
        this['vag_port_id'] = vagPortId;
    }
    public get vagPortId(): string | undefined {
        return this['vag_port_id'];
    }
    public withSshUser(sshUser: string): Vag {
        this['ssh_user'] = sshUser;
        return this;
    }
    public set sshUser(sshUser: string  | undefined) {
        this['ssh_user'] = sshUser;
    }
    public get sshUser(): string | undefined {
        return this['ssh_user'];
    }
    public withSshPwd(sshPwd: string): Vag {
        this['ssh_pwd'] = sshPwd;
        return this;
    }
    public set sshPwd(sshPwd: string  | undefined) {
        this['ssh_pwd'] = sshPwd;
    }
    public get sshPwd(): string | undefined {
        return this['ssh_pwd'];
    }
    public withVmId(vmId: string): Vag {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string  | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId(): string | undefined {
        return this['vm_id'];
    }
    public withName(name: string): Vag {
        this['name'] = name;
        return this;
    }
    public withInternalIp(internalIp: string): Vag {
        this['internal_ip'] = internalIp;
        return this;
    }
    public set internalIp(internalIp: string  | undefined) {
        this['internal_ip'] = internalIp;
    }
    public get internalIp(): string | undefined {
        return this['internal_ip'];
    }
    public withInternalIpv6(internalIpv6: string): Vag {
        this['internal_ipv6'] = internalIpv6;
        return this;
    }
    public set internalIpv6(internalIpv6: string  | undefined) {
        this['internal_ipv6'] = internalIpv6;
    }
    public get internalIpv6(): string | undefined {
        return this['internal_ipv6'];
    }
    public withInternalPortId(internalPortId: string): Vag {
        this['internal_port_id'] = internalPortId;
        return this;
    }
    public set internalPortId(internalPortId: string  | undefined) {
        this['internal_port_id'] = internalPortId;
    }
    public get internalPortId(): string | undefined {
        return this['internal_port_id'];
    }
    public withExternalIp(externalIp: string): Vag {
        this['external_ip'] = externalIp;
        return this;
    }
    public set externalIp(externalIp: string  | undefined) {
        this['external_ip'] = externalIp;
    }
    public get externalIp(): string | undefined {
        return this['external_ip'];
    }
    public withExternalId(externalId: string): Vag {
        this['external_id'] = externalId;
        return this;
    }
    public set externalId(externalId: string  | undefined) {
        this['external_id'] = externalId;
    }
    public get externalId(): string | undefined {
        return this['external_id'];
    }
    public withRootUser(rootUser: string): Vag {
        this['root_user'] = rootUser;
        return this;
    }
    public set rootUser(rootUser: string  | undefined) {
        this['root_user'] = rootUser;
    }
    public get rootUser(): string | undefined {
        return this['root_user'];
    }
    public withRootPwd(rootPwd: string): Vag {
        this['root_pwd'] = rootPwd;
        return this;
    }
    public set rootPwd(rootPwd: string  | undefined) {
        this['root_pwd'] = rootPwd;
    }
    public get rootPwd(): string | undefined {
        return this['root_pwd'];
    }
    public withStatus(status: string): Vag {
        this['status'] = status;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): Vag {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withCreateTime(createTime: number): Vag {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateTimeStr(createTimeStr: string): Vag {
        this['create_time_str'] = createTimeStr;
        return this;
    }
    public set createTimeStr(createTimeStr: string  | undefined) {
        this['create_time_str'] = createTimeStr;
    }
    public get createTimeStr(): string | undefined {
        return this['create_time_str'];
    }
    public withState(state: string): Vag {
        this['state'] = state;
        return this;
    }
    public withNumberOfOnlineUser(numberOfOnlineUser: number): Vag {
        this['number_of_online_user'] = numberOfOnlineUser;
        return this;
    }
    public set numberOfOnlineUser(numberOfOnlineUser: number  | undefined) {
        this['number_of_online_user'] = numberOfOnlineUser;
    }
    public get numberOfOnlineUser(): number | undefined {
        return this['number_of_online_user'];
    }
    public withRunningStatus(runningStatus: string): Vag {
        this['running_status'] = runningStatus;
        return this;
    }
    public set runningStatus(runningStatus: string  | undefined) {
        this['running_status'] = runningStatus;
    }
    public get runningStatus(): string | undefined {
        return this['running_status'];
    }
    public withDomainId(domainId: string): Vag {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withVersion(version: string): Vag {
        this['version'] = version;
        return this;
    }
    public withLatestVersion(latestVersion: string): Vag {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: string  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): string | undefined {
        return this['latest_version'];
    }
    public withAccessEdgeVersion(accessEdgeVersion: string): Vag {
        this['access_edge_version'] = accessEdgeVersion;
        return this;
    }
    public set accessEdgeVersion(accessEdgeVersion: string  | undefined) {
        this['access_edge_version'] = accessEdgeVersion;
    }
    public get accessEdgeVersion(): string | undefined {
        return this['access_edge_version'];
    }
    public withTenantLock(tenantLock: number): Vag {
        this['tenant_lock'] = tenantLock;
        return this;
    }
    public set tenantLock(tenantLock: number  | undefined) {
        this['tenant_lock'] = tenantLock;
    }
    public get tenantLock(): number | undefined {
        return this['tenant_lock'];
    }
    public withResourcePoolId(resourcePoolId: string): Vag {
        this['resource_pool_id'] = resourcePoolId;
        return this;
    }
    public set resourcePoolId(resourcePoolId: string  | undefined) {
        this['resource_pool_id'] = resourcePoolId;
    }
    public get resourcePoolId(): string | undefined {
        return this['resource_pool_id'];
    }
    public withRole(role: string): Vag {
        this['role'] = role;
        return this;
    }
    public withResourcePoolType(resourcePoolType: string): Vag {
        this['resource_pool_type'] = resourcePoolType;
        return this;
    }
    public set resourcePoolType(resourcePoolType: string  | undefined) {
        this['resource_pool_type'] = resourcePoolType;
    }
    public get resourcePoolType(): string | undefined {
        return this['resource_pool_type'];
    }
    public withEdgeSk(edgeSk: string): Vag {
        this['edge_sk'] = edgeSk;
        return this;
    }
    public set edgeSk(edgeSk: string  | undefined) {
        this['edge_sk'] = edgeSk;
    }
    public get edgeSk(): string | undefined {
        return this['edge_sk'];
    }
    public withHasHeartbeat(hasHeartbeat: boolean): Vag {
        this['has_heartbeat'] = hasHeartbeat;
        return this;
    }
    public set hasHeartbeat(hasHeartbeat: boolean  | undefined) {
        this['has_heartbeat'] = hasHeartbeat;
    }
    public get hasHeartbeat(): boolean | undefined {
        return this['has_heartbeat'];
    }
    public withUserCount(userCount: number): Vag {
        this['user_count'] = userCount;
        return this;
    }
    public set userCount(userCount: number  | undefined) {
        this['user_count'] = userCount;
    }
    public get userCount(): number | undefined {
        return this['user_count'];
    }
}