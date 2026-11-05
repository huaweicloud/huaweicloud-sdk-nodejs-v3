

export class ServiceStatusItem {
    private 'service_name'?: string;
    public status?: boolean;
    public constructor(serviceName?: string, status?: boolean) { 
        this['service_name'] = serviceName;
        this['status'] = status;
    }
    public withServiceName(serviceName: string): ServiceStatusItem {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withStatus(status: boolean): ServiceStatusItem {
        this['status'] = status;
        return this;
    }
}