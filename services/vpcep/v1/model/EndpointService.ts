

export class EndpointService {
    public id?: string;
    public owner?: string;
    private 'service_name'?: string;
    private 'service_type'?: EndpointServiceServiceTypeEnum | string;
    private 'created_at'?: string;
    private 'is_charge'?: boolean;
    private 'enable_policy'?: boolean;
    public constructor() { 
    }
    public withId(id: string): EndpointService {
        this['id'] = id;
        return this;
    }
    public withOwner(owner: string): EndpointService {
        this['owner'] = owner;
        return this;
    }
    public withServiceName(serviceName: string): EndpointService {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withServiceType(serviceType: EndpointServiceServiceTypeEnum | string): EndpointService {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: EndpointServiceServiceTypeEnum | string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): EndpointServiceServiceTypeEnum | string | undefined {
        return this['service_type'];
    }
    public withCreatedAt(createdAt: string): EndpointService {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withIsCharge(isCharge: boolean): EndpointService {
        this['is_charge'] = isCharge;
        return this;
    }
    public set isCharge(isCharge: boolean  | undefined) {
        this['is_charge'] = isCharge;
    }
    public get isCharge(): boolean | undefined {
        return this['is_charge'];
    }
    public withEnablePolicy(enablePolicy: boolean): EndpointService {
        this['enable_policy'] = enablePolicy;
        return this;
    }
    public set enablePolicy(enablePolicy: boolean  | undefined) {
        this['enable_policy'] = enablePolicy;
    }
    public get enablePolicy(): boolean | undefined {
        return this['enable_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EndpointServiceServiceTypeEnum {
    INTERFACE = 'interface',
    GATEWAY = 'gateway'
}
