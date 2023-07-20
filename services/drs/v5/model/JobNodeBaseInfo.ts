

export class JobNodeBaseInfo {
    private 'instance_type'?: JobNodeBaseInfoInstanceTypeEnum | string;
    public arch?: JobNodeBaseInfoArchEnum | string;
    private 'availability_zone'?: string;
    public status?: string;
    public role?: string;
    public constructor(instanceType?: string, arch?: string, availabilityZone?: string) { 
        this['instance_type'] = instanceType;
        this['arch'] = arch;
        this['availability_zone'] = availabilityZone;
    }
    public withInstanceType(instanceType: JobNodeBaseInfoInstanceTypeEnum | string): JobNodeBaseInfo {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: JobNodeBaseInfoInstanceTypeEnum | string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): JobNodeBaseInfoInstanceTypeEnum | string | undefined {
        return this['instance_type'];
    }
    public withArch(arch: JobNodeBaseInfoArchEnum | string): JobNodeBaseInfo {
        this['arch'] = arch;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): JobNodeBaseInfo {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withStatus(status: string): JobNodeBaseInfo {
        this['status'] = status;
        return this;
    }
    public withRole(role: string): JobNodeBaseInfo {
        this['role'] = role;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobNodeBaseInfoInstanceTypeEnum {
    SINGLE = 'single',
    HA = 'ha'
}
/**
    * @export
    * @enum {string}
    */
export enum JobNodeBaseInfoArchEnum {
    X86 = 'x86',
    ARM = 'arm'
}
