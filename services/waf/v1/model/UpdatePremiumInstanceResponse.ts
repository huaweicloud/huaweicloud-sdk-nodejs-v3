import { IdHostnameEntry } from './IdHostnameEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePremiumInstanceResponse extends SdkResponse {
    public id?: string;
    public instancename?: string;
    public serverId?: string;
    public region?: string;
    public zone?: string;
    public arch?: string;
    private 'cpu_flavor'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'service_ip'?: string;
    private 'service_ipv6'?: string;
    public floatIp?: string;
    public securityGroupId?: Array<string>;
    public mgrSecurityGroupId?: string;
    public status?: number;
    private 'run_status'?: number;
    private 'access_status'?: number;
    public upgradable?: number;
    public cloudServiceType?: string;
    public resourceType?: string;
    public resourceSpecCode?: string;
    public specification?: string;
    public hosts?: Array<IdHostnameEntry>;
    private 'volume_type'?: string;
    private 'cluster_id'?: string;
    private 'pool_id'?: string;
    private 'charge_mode'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UpdatePremiumInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withInstancename(instancename: string): UpdatePremiumInstanceResponse {
        this['instancename'] = instancename;
        return this;
    }
    public withServerId(serverId: string): UpdatePremiumInstanceResponse {
        this['serverId'] = serverId;
        return this;
    }
    public withRegion(region: string): UpdatePremiumInstanceResponse {
        this['region'] = region;
        return this;
    }
    public withZone(zone: string): UpdatePremiumInstanceResponse {
        this['zone'] = zone;
        return this;
    }
    public withArch(arch: string): UpdatePremiumInstanceResponse {
        this['arch'] = arch;
        return this;
    }
    public withCpuFlavor(cpuFlavor: string): UpdatePremiumInstanceResponse {
        this['cpu_flavor'] = cpuFlavor;
        return this;
    }
    public set cpuFlavor(cpuFlavor: string  | undefined) {
        this['cpu_flavor'] = cpuFlavor;
    }
    public get cpuFlavor(): string | undefined {
        return this['cpu_flavor'];
    }
    public withVpcId(vpcId: string): UpdatePremiumInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): UpdatePremiumInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withServiceIp(serviceIp: string): UpdatePremiumInstanceResponse {
        this['service_ip'] = serviceIp;
        return this;
    }
    public set serviceIp(serviceIp: string  | undefined) {
        this['service_ip'] = serviceIp;
    }
    public get serviceIp(): string | undefined {
        return this['service_ip'];
    }
    public withServiceIpv6(serviceIpv6: string): UpdatePremiumInstanceResponse {
        this['service_ipv6'] = serviceIpv6;
        return this;
    }
    public set serviceIpv6(serviceIpv6: string  | undefined) {
        this['service_ipv6'] = serviceIpv6;
    }
    public get serviceIpv6(): string | undefined {
        return this['service_ipv6'];
    }
    public withFloatIp(floatIp: string): UpdatePremiumInstanceResponse {
        this['floatIp'] = floatIp;
        return this;
    }
    public withSecurityGroupId(securityGroupId: Array<string>): UpdatePremiumInstanceResponse {
        this['securityGroupId'] = securityGroupId;
        return this;
    }
    public withMgrSecurityGroupId(mgrSecurityGroupId: string): UpdatePremiumInstanceResponse {
        this['mgrSecurityGroupId'] = mgrSecurityGroupId;
        return this;
    }
    public withStatus(status: number): UpdatePremiumInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withRunStatus(runStatus: number): UpdatePremiumInstanceResponse {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: number  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): number | undefined {
        return this['run_status'];
    }
    public withAccessStatus(accessStatus: number): UpdatePremiumInstanceResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): number | undefined {
        return this['access_status'];
    }
    public withUpgradable(upgradable: number): UpdatePremiumInstanceResponse {
        this['upgradable'] = upgradable;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): UpdatePremiumInstanceResponse {
        this['cloudServiceType'] = cloudServiceType;
        return this;
    }
    public withResourceType(resourceType: string): UpdatePremiumInstanceResponse {
        this['resourceType'] = resourceType;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): UpdatePremiumInstanceResponse {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withSpecification(specification: string): UpdatePremiumInstanceResponse {
        this['specification'] = specification;
        return this;
    }
    public withHosts(hosts: Array<IdHostnameEntry>): UpdatePremiumInstanceResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withVolumeType(volumeType: string): UpdatePremiumInstanceResponse {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withClusterId(clusterId: string): UpdatePremiumInstanceResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPoolId(poolId: string): UpdatePremiumInstanceResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withChargeMode(chargeMode: number): UpdatePremiumInstanceResponse {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: number  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): number | undefined {
        return this['charge_mode'];
    }
}