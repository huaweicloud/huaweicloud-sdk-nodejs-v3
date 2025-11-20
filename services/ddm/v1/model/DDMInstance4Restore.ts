

export class DDMInstance4Restore {
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    public status?: string;
    public available?: boolean;
    private 'unavailable_reason'?: string;
    private 'vpc_name'?: string;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): DDMInstance4Restore {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): DDMInstance4Restore {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withStatus(status: string): DDMInstance4Restore {
        this['status'] = status;
        return this;
    }
    public withAvailable(available: boolean): DDMInstance4Restore {
        this['available'] = available;
        return this;
    }
    public withUnavailableReason(unavailableReason: string): DDMInstance4Restore {
        this['unavailable_reason'] = unavailableReason;
        return this;
    }
    public set unavailableReason(unavailableReason: string  | undefined) {
        this['unavailable_reason'] = unavailableReason;
    }
    public get unavailableReason(): string | undefined {
        return this['unavailable_reason'];
    }
    public withVpcName(vpcName: string): DDMInstance4Restore {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
}