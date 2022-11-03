
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RenameInstanceResponse extends SdkResponse {
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
    public serverId?: string;
    private 'create_time'?: number | undefined;
    public constructor() { 
        super();
    }
    public withId(id: string): RenameInstanceResponse {
        this['id'] = id;
        return this;
    }
    public withInstancename(instancename: string): RenameInstanceResponse {
        this['instancename'] = instancename;
        return this;
    }
    public withRegion(region: string): RenameInstanceResponse {
        this['region'] = region;
        return this;
    }
    public withZone(zone: string): RenameInstanceResponse {
        this['zone'] = zone;
        return this;
    }
    public withArch(arch: string): RenameInstanceResponse {
        this['arch'] = arch;
        return this;
    }
    public withCpuFlavor(cpuFlavor: string): RenameInstanceResponse {
        this['cpu_flavor'] = cpuFlavor;
        return this;
    }
    public set cpuFlavor(cpuFlavor: string | undefined) {
        this['cpu_flavor'] = cpuFlavor;
    }
    public get cpuFlavor() {
        return this['cpu_flavor'];
    }
    public withVpcId(vpcId: string): RenameInstanceResponse {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): RenameInstanceResponse {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withServiceIp(serviceIp: string): RenameInstanceResponse {
        this['service_ip'] = serviceIp;
        return this;
    }
    public set serviceIp(serviceIp: string | undefined) {
        this['service_ip'] = serviceIp;
    }
    public get serviceIp() {
        return this['service_ip'];
    }
    public withSecurityGroupIds(securityGroupIds: Array<string>): RenameInstanceResponse {
        this['security_group_ids'] = securityGroupIds;
        return this;
    }
    public set securityGroupIds(securityGroupIds: Array<string> | undefined) {
        this['security_group_ids'] = securityGroupIds;
    }
    public get securityGroupIds() {
        return this['security_group_ids'];
    }
    public withStatus(status: number): RenameInstanceResponse {
        this['status'] = status;
        return this;
    }
    public withRunStatus(runStatus: number): RenameInstanceResponse {
        this['run_status'] = runStatus;
        return this;
    }
    public set runStatus(runStatus: number | undefined) {
        this['run_status'] = runStatus;
    }
    public get runStatus() {
        return this['run_status'];
    }
    public withAccessStatus(accessStatus: number): RenameInstanceResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: number | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus() {
        return this['access_status'];
    }
    public withUpgradable(upgradable: number): RenameInstanceResponse {
        this['upgradable'] = upgradable;
        return this;
    }
    public withCloudServiceType(cloudServiceType: string): RenameInstanceResponse {
        this['cloudServiceType'] = cloudServiceType;
        return this;
    }
    public withResourceType(resourceType: string): RenameInstanceResponse {
        this['resourceType'] = resourceType;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): RenameInstanceResponse {
        this['resourceSpecCode'] = resourceSpecCode;
        return this;
    }
    public withSpecification(specification: string): RenameInstanceResponse {
        this['specification'] = specification;
        return this;
    }
    public withServerId(serverId: string): RenameInstanceResponse {
        this['serverId'] = serverId;
        return this;
    }
    public withCreateTime(createTime: number): RenameInstanceResponse {
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