import { IdHostnameEntry } from './IdHostnameEntry';


export class ListInstance {
    public id?: string;
    public instancename?: string;
    public region?: string;
    public zone?: string;
    public arch?: string;
    private 'cpu_flavor'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'service_ip'?: string;
    private 'security_group_ids'?: Array<string>;
    public status?: ListInstanceStatusEnum | number;
    private 'run_status'?: ListInstanceRunStatusEnum | number;
    private 'access_status'?: ListInstanceAccessStatusEnum | number;
    public upgradable?: number;
    public cloudServiceType?: string;
    public resourceType?: string;
    public resourceSpecCode?: string;
    public specification?: string;
    public hosts?: Array<IdHostnameEntry>;
    public serverId?: string;
    private 'create_time'?: number;
    private 'instance_name'?: string;
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
    public set cpuFlavor(cpuFlavor: string  | undefined) {
        this['cpu_flavor'] = cpuFlavor;
    }
    public get cpuFlavor(): string | undefined {
        return this['cpu_flavor'];
    }
    public withVpcId(vpcId: string): ListInstance {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListInstance {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withServiceIp(serviceIp: string): ListInstance {
        this['service_ip'] = serviceIp;
        return this;
    }
    public set serviceIp(serviceIp: string  | undefined) {
        this['service_ip'] = serviceIp;
    }
    public get serviceIp(): string | undefined {
        return this['service_ip'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): ListInstance {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string>  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): Array<string> | undefined {
        return this['security_group_ids'];
    }
    public withStatus(status: ListInstanceStatusEnum | number): ListInstance {
        this['status'] = status;
        return this;
    }
    public withRunStatus(runStatus: ListInstanceRunStatusEnum | number): ListInstance {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: ListInstanceRunStatusEnum | number  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): ListInstanceRunStatusEnum | number | undefined {
        return this['run_status'];
    }
    public withAccessStatus(accessStatus: ListInstanceAccessStatusEnum | number): ListInstance {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: ListInstanceAccessStatusEnum | number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): ListInstanceAccessStatusEnum | number | undefined {
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
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withInstanceName(instanceName: string): ListInstance {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstanceRunStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4,
    NUMBER_5 = 5,
    NUMBER_6 = 6,
    NUMBER_7 = 7,
    NUMBER_8 = 8
}
/**
    * @export
    * @enum {string}
    */
export enum ListInstanceAccessStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
