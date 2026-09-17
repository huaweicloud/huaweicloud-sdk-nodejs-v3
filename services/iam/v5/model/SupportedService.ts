

export class SupportedService {
    private 'service_name'?: string;
    private 'display_name'?: string;
    public constructor(serviceName?: string, displayName?: string) { 
        this['service_name'] = serviceName;
        this['display_name'] = displayName;
    }
    public withServiceName(serviceName: string): SupportedService {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withDisplayName(displayName: string): SupportedService {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}