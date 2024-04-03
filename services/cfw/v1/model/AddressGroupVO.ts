

export class AddressGroupVO {
    private 'set_id'?: string;
    public name?: string;
    public protocols?: Array<number>;
    private 'service_set_type'?: number;
    public constructor() { 
    }
    public withSetId(setId: string): AddressGroupVO {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string  | undefined) {
        this['set_id'] = setId;
    }
    public get setId(): string | undefined {
        return this['set_id'];
    }
    public withName(name: string): AddressGroupVO {
        this['name'] = name;
        return this;
    }
    public withProtocols(protocols: Array<number>): AddressGroupVO {
        this['protocols'] = protocols;
        return this;
    }
    public withServiceSetType(serviceSetType: number): AddressGroupVO {
        this['service_set_type'] = serviceSetType;
        return this;
    }
    public set serviceSetType(serviceSetType: number  | undefined) {
        this['service_set_type'] = serviceSetType;
    }
    public get serviceSetType(): number | undefined {
        return this['service_set_type'];
    }
}