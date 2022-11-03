import { IdHostnameEntry } from './IdHostnameEntry';


export class ListInstance {
    public id?: string;
    public instancename?: string;
    public region?: string;
    public zone?: string;
    public arch?: string;
    private 'cpu_flavor'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    private 'subnet_id'?: string | undefined;
    private 'service_ip'?: string | undefined;
    private 'security_group_ids'?: Array<string> | undefined;
    public status?: number;
    private 'run_status'?: number | undefined;
    private 'access_status'?: number | undefined;
    public upgradable?: number;
    public cloudServiceType?: string;
    public resourceType?: string;
    public resourceSpecCode?: string;
    public specification?: string;
    public hosts?: Array<IdHostnameEntry>;
    public serverId?: string;
    private 'create_time'?: number | undefined;
    public constructor() { 
    }
    public withId(id: string): ListInstance {
        this['id'] = id;
        return this;
    }
    public withInstancename(instancename: string): ListInstance {
        this['instancename'] = instancename;
        return this;
    }
    public withRegion(region: string): ListInstance {
        this['region'] = region;
        return this;
    }
    public withZone(zone: string): ListInstance {
        this['zone'] = zone;
        return this;
    }
    public withArch(arch: string): ListInstance {
        this['arch'] = arch;
        return this;
    }
    public withCpuFlavor(cpuFlavor: string): ListInstance {
        this['cpu_flavor'] = cpuFlavor;
        return this;
    }
    public set cpuFlavor(cpuFlavor: string | undefined) {
        this['cpu_flavor'] = cpuFlavor;
    }
    public get cpuFlavor() {
        return this['cpu_flavor'];
    }
    public withVpcId(vpcId: string): ListInstance {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListInstance {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withServiceIp(serviceIp: string): ListInstance {
        this['service_ip'] = serviceIp;
        return this;
    }
    public set serviceIp(serviceIp: string | undefined) {
        this['service_ip'] = serviceIp;
    }
    public get serviceIp() {
        return this['service_ip'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): ListInstance {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string> | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds() {
        return this['security_group_ids'];
    }
    public withStatus(status: number): ListInstance {
        this['status'] = status;
        return this;
    }
    public withRunStatus(runStatus: number): ListInstance {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: number | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus() {
        return this['run_status'];
    }
    public withAccessStatus(accessStatus: number): ListInstance {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus() {
        return this['access_status'];
    }
    public withUpgradable(upgradable: number): ListInstance {
        this['upgradable'] = upgradable;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): ListInstance {
        this['cloudServiceType'] = cloudServiceType;
        return this;
    }
    public withResourceType(resourceType: string): ListInstance {
        this['resourceType'] = resourceType;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): ListInstance {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withSpecification(specification: string): ListInstance {
        this['specification'] = specification;
        return this;
    }
    public withHosts(hosts: Array<IdHostnameEntry>): ListInstance {
        this['hosts'] = hosts;
        return this;
    }
    public withServerId(serverId: string): ListInstance {
        this['serverId'] = serverId;
        return this;
    }
    public withCreateTime(createTime: number): ListInstance {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
}