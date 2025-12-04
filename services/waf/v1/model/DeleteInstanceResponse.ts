
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteInstanceResponse extends SdkResponse {
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
    public status?: DeleteInstanceResponseStatusEnum | number;
    private 'run_status'?: DeleteInstanceResponseRunStatusEnum | number;
    private 'access_status'?: DeleteInstanceResponseAccessStatusEnum | number;
    public upgradable?: number;
    public cloudServiceType?: string;
    public resourceType?: string;
    public resourceSpecCode?: string;
    public specification?: string;
    public serverId?: string;
    private 'create_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): DeleteInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withInstancename(instancename: string): DeleteInstanceResponse {
        this['instancename'] = instancename;
        return this;
    }
    public withRegion(region: string): DeleteInstanceResponse {
        this['region'] = region;
        return this;
    }
    public withZone(zone: string): DeleteInstanceResponse {
        this['zone'] = zone;
        return this;
    }
    public withArch(arch: string): DeleteInstanceResponse {
        this['arch'] = arch;
        return this;
    }
    public withCpuFlavor(cpuFlavor: string): DeleteInstanceResponse {
        this['cpu_flavor'] = cpuFlavor;
        return this;
    }
    public set cpuFlavor(cpuFlavor: string  | undefined) {
        this['cpu_flavor'] = cpuFlavor;
    }
    public get cpuFlavor(): string | undefined {
        return this['cpu_flavor'];
    }
    public withVpcId(vpcId: string): DeleteInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): DeleteInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withServiceIp(serviceIp: string): DeleteInstanceResponse {
        this['service_ip'] = serviceIp;
        return this;
    }
    public set serviceIp(serviceIp: string  | undefined) {
        this['service_ip'] = serviceIp;
    }
    public get serviceIp(): string | undefined {
        return this['service_ip'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): DeleteInstanceResponse {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string>  | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds(): Array<string> | undefined {
        return this['security_group_ids'];
    }
    public withStatus(status: DeleteInstanceResponseStatusEnum | number): DeleteInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withRunStatus(runStatus: DeleteInstanceResponseRunStatusEnum | number): DeleteInstanceResponse {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: DeleteInstanceResponseRunStatusEnum | number  | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus(): DeleteInstanceResponseRunStatusEnum | number | undefined {
        return this['run_status'];
    }
    public withAccessStatus(accessStatus: DeleteInstanceResponseAccessStatusEnum | number): DeleteInstanceResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: DeleteInstanceResponseAccessStatusEnum | number  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): DeleteInstanceResponseAccessStatusEnum | number | undefined {
        return this['access_status'];
    }
    public withUpgradable(upgradable: number): DeleteInstanceResponse {
        this['upgradable'] = upgradable;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): DeleteInstanceResponse {
        this['cloudServiceType'] = cloudServiceType;
        return this;
    }
    public withResourceType(resourceType: string): DeleteInstanceResponse {
        this['resourceType'] = resourceType;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): DeleteInstanceResponse {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withSpecification(specification: string): DeleteInstanceResponse {
        this['specification'] = specification;
        return this;
    }
    public withServerId(serverId: string): DeleteInstanceResponse {
        this['serverId'] = serverId;
        return this;
    }
    public withCreateTime(createTime: number): DeleteInstanceResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteInstanceResponseStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteInstanceResponseRunStatusEnum {
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
export enum DeleteInstanceResponseAccessStatusEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
