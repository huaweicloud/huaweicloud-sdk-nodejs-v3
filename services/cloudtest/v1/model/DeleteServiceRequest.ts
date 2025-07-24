

export class DeleteServiceRequest {
    private 'service_id'?: number;
    public constructor(serviceId?: number) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: number): DeleteServiceRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: number  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): number | undefined {
        return this['service_id'];
    }
}