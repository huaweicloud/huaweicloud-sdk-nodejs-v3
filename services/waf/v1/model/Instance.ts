import { IdHostnameEntry } from './IdHostnameEntry';


export class Instance {
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
    public status?: InstanceStatusEnum | number;
    private 'run_status'?: InstanceRunStatusEnum | number;
    private 'access_status'?: InstanceAccessStatusEnum | number;
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
    public withId(id: string): Instance {
        this['id'] = id;
        return this;
    }
    public withInstancename(instancename: string): Instance {
        this['instancename'] = instancename;
        return this;
    }
    public withRegion(region: string): Instance {
        this['region'] = region;
        return this;
    }
    public withZone(zone: string): Instance {
        this['zone'] = zone;
        return this;
    }
    public withArch(arch: string): Instance {
        this['arch'] = arch;
        return this;
    }
    public withCpuFlavor(cpuFlavor: string): Instance {
        this['cpu_flavor'] = cpuFlavor;
        return this;
    }
    public set cpuFlavor(cpuFlavor: string  | undefined) {
        this['cpu_flavor'] = cpuFlavor;
    }
    public get cpuFlavor(): string | undefined {
        return this['cpu_flavor'];
    }
    public withVpcId(vpcId: string): Instance {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): Instance {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withServiceIp(serviceIp: string): Instance {
        this['service_ip'] = serviceIp;
        return this;
    }
    public set serviceIp(serviceIp: string  | undefined) {
        this['service_ip'] = serviceIp;
    }
    public get serviceIp(): string | undefined {
        return this['service_ip'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): Instance {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string>  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): Array<string> | undefined {
        return this['security_group_ids'];
    }
    public withStatus(status: InstanceStatusEnum | number): Instance {
        this['status'] = status;
        return this;
    }
    public withRunStatus(runStatus: InstanceRunStatusEnum | number): Instance {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: InstanceRunStatusEnum | number  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): InstanceRunStatusEnum | number | undefined {
        return this['run_status'];
    }
    public withAccessStatus(accessStatus: InstanceAccessStatusEnum | number): Instance {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: InstanceAccessStatusEnum | number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): InstanceAccessStatusEnum | number | undefined {
        return this['access_status'];
    }
    public withUpgradable(upgradable: number): Instance {
        this['upgradable'] = upgradable;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): Instance {
        this['cloudServiceType'] = cloudServiceType;
        return this;
    }
    public withResourceType(resourceType: string): Instance {
        this['resourceType'] = resourceType;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): Instance {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withSpecification(specification: string): Instance {
        this['specification'] = specification;
        return this;
    }
    public withHosts(hosts: Array<IdHostnameEntry>): Instance {
        this['hosts'] = hosts;
        return this;
    }
    public withServerId(serverId: string): Instance {
        this['serverId'] = serverId;
        return this;
    }
    public withCreateTime(createTime: number): Instance {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withInstanceName(instanceName: string): Instance {
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
export enum InstanceStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum InstanceRunStatusEnum {
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
export enum InstanceAccessStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
