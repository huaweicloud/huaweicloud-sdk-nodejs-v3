

export class KeystoneShowServiceRequest {
    private 'service_id': string | undefined;
    public constructor(serviceId: any) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): KeystoneShowServiceRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId() {
        return this['service_id'];
    }
}