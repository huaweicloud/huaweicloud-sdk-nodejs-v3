

export class ServiceRequestBody {
    private 'service_name'?: string;
    private 'server_host'?: string;
    public constructor(serviceName?: string, serverHost?: string) { 
        this['service_name'] = serviceName;
        this['server_host'] = serverHost;
    }
    public withServiceName(serviceName: string): ServiceRequestBody {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withServerHost(serverHost: string): ServiceRequestBody {
        this['server_host'] = serverHost;
        return this;
    }
    public set serverHost(serverHost: string  | undefined) {
        this['server_host'] = serverHost;
    }
    public get serverHost(): string | undefined {
        return this['server_host'];
    }
}