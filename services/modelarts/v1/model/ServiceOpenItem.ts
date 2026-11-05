

export class ServiceOpenItem {
    private 'service_name'?: string;
    public constructor(serviceName?: string) { 
        this['service_name'] = serviceName;
    }
    public withServiceName(serviceName: string): ServiceOpenItem {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
}