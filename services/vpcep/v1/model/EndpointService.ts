

export class EndpointService {
    public id?: string;
    public owner?: string;
    private 'service_name'?: string | undefined;
    private 'service_type'?: EndpointServiceServiceTypeEnum | undefined;
    private 'created_at'?: string | undefined;
    private 'is_charge'?: boolean | undefined;
    private 'enable_policy'?: boolean | undefined;
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
    public set serviceName(serviceName: string | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName() {
        return this['service_name'];
    }
    public withServiceType(serviceType: EndpointServiceServiceTypeEnum): EndpointService {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: EndpointServiceServiceTypeEnum | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
    public withCreatedAt(createdAt: string): EndpointService {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withIsCharge(isCharge: boolean): EndpointService {
        this['is_charge'] = isCharge;
        return this;
    }
    public set isCharge(isCharge: boolean | undefined) {
        this['is_charge'] = isCharge;
    }
    public get isCharge() {
        return this['is_charge'];
    }
    public withEnablePolicy(enablePolicy: boolean): EndpointService {
        this['enable_policy'] = enablePolicy;
        return this;
    }
    public set enablePolicy(enablePolicy: boolean | undefined) {
        this['enable_policy'] = enablePolicy;
    }
    public get enablePolicy() {
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
