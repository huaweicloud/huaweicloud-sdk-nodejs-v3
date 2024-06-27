

export class ServiceGroupVO {
    public name?: string;
    public protocols?: Array<number>;
    private 'service_set_type'?: number;
    private 'set_id'?: string;
    public constructor() { 
    }
    public withName(name: string): ServiceGroupVO {
        this['name'] = name;
        return this;
    }
    public withProtocols(protocols: Array<number>): ServiceGroupVO {
        this['protocols'] = protocols;
        return this;
    }
    public withServiceSetType(serviceSetType: number): ServiceGroupVO {
        this['service_set_type'] = serviceSetType;
        return this;
    }
    public set serviceSetType(serviceSetType: number  | undefined) {
        this['service_set_type'] = serviceSetType;
    }
    public get serviceSetType(): number | undefined {
        return this['service_set_type'];
    }
    public withSetId(setId: string): ServiceGroupVO {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
}