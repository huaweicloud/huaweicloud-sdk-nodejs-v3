

export class InstanceDetailHaInfo {
    private 'ha_id'?: string;
    private 'instance_type'?: string;
    public constructor(haId?: string, instanceType?: string) { 
        this['ha_id'] = haId;
        this['instance_type'] = instanceType;
    }
    public withHaId(haId: string): InstanceDetailHaInfo {
        this['ha_id'] = haId;
        return this;
    }
    public set haId(haId: string  | undefined) {
        this['ha_id'] = haId;
    }
    public get haId(): string | undefined {
        return this['ha_id'];
    }
    public withInstanceType(instanceType: string): InstanceDetailHaInfo {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
}