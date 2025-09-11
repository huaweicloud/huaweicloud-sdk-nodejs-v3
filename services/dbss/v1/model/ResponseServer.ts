

export class ResponseServer {
    private 'connect_ip'?: string;
    public cpu?: string;
    public created?: string;
    public description?: string;
    public effect?: number;
    private 'instance_id'?: string;
    private 'is_active'?: number;
    public name?: string;
    public ram?: string;
    public region?: string;
    private 'resource_spec_code'?: string;
    public scene?: string;
    private 'security_group_id'?: string;
    public specification?: string;
    public status?: string;
    private 'subnet_id'?: string;
    private 'task_status'?: string;
    private 'update_status'?: string;
    public version?: string;
    private 'vpc_id'?: string;
    public zone?: string;
    private 'server_id'?: string;
    public constructor() { 
    }
    public withConnectIp(connectIp: string): ResponseServer {
        this['connect_ip'] = connectIp;
        return this;
    }
    public set connectIp(connectIp: string  | undefined) {
        this['connect_ip'] = connectIp;
    }
    public get connectIp(): string | undefined {
        return this['connect_ip'];
    }
    public withCpu(cpu: string): ResponseServer {
        this['cpu'] = cpu;
        return this;
    }
    public withCreated(created: string): ResponseServer {
        this['created'] = created;
        return this;
    }
    public withDescription(description: string): ResponseServer {
        this['description'] = description;
        return this;
    }
    public withEffect(effect: number): ResponseServer {
        this['effect'] = effect;
        return this;
    }
    public withInstanceId(instanceId: string): ResponseServer {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIsActive(isActive: number): ResponseServer {
        this['is_active'] = isActive;
        return this;
    }
    public set isActive(isActive: number  | undefined) {
        this['is_active'] = isActive;
    }
    public get isActive(): number | undefined {
        return this['is_active'];
    }
    public withName(name: string): ResponseServer {
        this['name'] = name;
        return this;
    }
    public withRam(ram: string): ResponseServer {
        this['ram'] = ram;
        return this;
    }
    public withRegion(region: string): ResponseServer {
        this['region'] = region;
        return this;
    }
    public withResourceSpecCode(resourceSpecCode: string): ResponseServer {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withScene(scene: string): ResponseServer {
        this['scene'] = scene;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): ResponseServer {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withSpecification(specification: string): ResponseServer {
        this['specification'] = specification;
        return this;
    }
    public withStatus(status: string): ResponseServer {
        this['status'] = status;
        return this;
    }
    public withSubnetId(subnetId: string): ResponseServer {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withTaskStatus(taskStatus: string): ResponseServer {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: string  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): string | undefined {
        return this['task_status'];
    }
    public withUpdateStatus(updateStatus: string): ResponseServer {
        this['update_status'] = updateStatus;
        return this;
    }
    public set updateStatus(updateStatus: string  | undefined) {
        this['update_status'] = updateStatus;
    }
    public get updateStatus(): string | undefined {
        return this['update_status'];
    }
    public withVersion(version: string): ResponseServer {
        this['version'] = version;
        return this;
    }
    public withVpcId(vpcId: string): ResponseServer {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withZone(zone: string): ResponseServer {
        this['zone'] = zone;
        return this;
    }
    public withServerId(serverId: string): ResponseServer {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
}