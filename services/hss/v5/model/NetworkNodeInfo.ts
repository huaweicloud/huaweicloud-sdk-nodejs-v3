

export class NetworkNodeInfo {
    public id?: string;
    public name?: string;
    public status?: string;
    private 'ip_addr'?: string;
    private 'ipv6_addr'?: string;
    private 'private_ip_addr'?: string;
    private 'private_ipv6_addr'?: string;
    private 'runtime_version'?: string;
    private 'os_version'?: string;
    private 'security_group'?: string;
    private 'server_id'?: string;
    private 'server_type'?: string;
    public constructor(id?: string, name?: string, status?: string, ipAddr?: string, runtimeVersion?: string, osVersion?: string, securityGroup?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['status'] = status;
        this['ip_addr'] = ipAddr;
        this['runtime_version'] = runtimeVersion;
        this['os_version'] = osVersion;
        this['security_group'] = securityGroup;
    }
    public withId(id: string): NetworkNodeInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NetworkNodeInfo {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): NetworkNodeInfo {
        this['status'] = status;
        return this;
    }
    public withIpAddr(ipAddr: string): NetworkNodeInfo {
        this['ip_addr'] = ipAddr;
        return this;
    }
    public set ipAddr(ipAddr: string  | undefined) {
        this['ip_addr'] = ipAddr;
    }
    public get ipAddr(): string | undefined {
        return this['ip_addr'];
    }
    public withIpv6Addr(ipv6Addr: string): NetworkNodeInfo {
        this['ipv6_addr'] = ipv6Addr;
        return this;
    }
    public set ipv6Addr(ipv6Addr: string  | undefined) {
        this['ipv6_addr'] = ipv6Addr;
    }
    public get ipv6Addr(): string | undefined {
        return this['ipv6_addr'];
    }
    public withPrivateIpAddr(privateIpAddr: string): NetworkNodeInfo {
        this['private_ip_addr'] = privateIpAddr;
        return this;
    }
    public set privateIpAddr(privateIpAddr: string  | undefined) {
        this['private_ip_addr'] = privateIpAddr;
    }
    public get privateIpAddr(): string | undefined {
        return this['private_ip_addr'];
    }
    public withPrivateIpv6Addr(privateIpv6Addr: string): NetworkNodeInfo {
        this['private_ipv6_addr'] = privateIpv6Addr;
        return this;
    }
    public set privateIpv6Addr(privateIpv6Addr: string  | undefined) {
        this['private_ipv6_addr'] = privateIpv6Addr;
    }
    public get privateIpv6Addr(): string | undefined {
        return this['private_ipv6_addr'];
    }
    public withRuntimeVersion(runtimeVersion: string): NetworkNodeInfo {
        this['runtime_version'] = runtimeVersion;
        return this;
    }
    public set runtimeVersion(runtimeVersion: string  | undefined) {
        this['runtime_version'] = runtimeVersion;
    }
    public get runtimeVersion(): string | undefined {
        return this['runtime_version'];
    }
    public withOsVersion(osVersion: string): NetworkNodeInfo {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withSecurityGroup(securityGroup: string): NetworkNodeInfo {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: string  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): string | undefined {
        return this['security_group'];
    }
    public withServerId(serverId: string): NetworkNodeInfo {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withServerType(serverType: string): NetworkNodeInfo {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
}