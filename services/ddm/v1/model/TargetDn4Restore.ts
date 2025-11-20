

export class TargetDn4Restore {
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    private 'engine_name'?: string;
    public status?: string;
    public available?: boolean;
    private 'unavailable_reason'?: string;
    private 'vpc_name'?: string;
    private 'private_ip'?: string;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): TargetDn4Restore {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): TargetDn4Restore {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEngineName(engineName: string): TargetDn4Restore {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withStatus(status: string): TargetDn4Restore {
        this['status'] = status;
        return this;
    }
    public withAvailable(available: boolean): TargetDn4Restore {
        this['available'] = available;
        return this;
    }
    public withUnavailableReason(unavailableReason: string): TargetDn4Restore {
        this['unavailable_reason'] = unavailableReason;
        return this;
    }
    public set unavailableReason(unavailableReason: string  | undefined) {
        this['unavailable_reason'] = unavailableReason;
    }
    public get unavailableReason(): string | undefined {
        return this['unavailable_reason'];
    }
    public withVpcName(vpcName: string): TargetDn4Restore {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withPrivateIp(privateIp: string): TargetDn4Restore {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
}