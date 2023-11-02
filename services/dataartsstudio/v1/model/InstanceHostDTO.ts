

export class InstanceHostDTO {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'intranet_host'?: string;
    private 'external_host'?: string;
    public domains?: Array<string>;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstanceHostDTO {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InstanceHostDTO {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withIntranetHost(intranetHost: string): InstanceHostDTO {
        this['intranet_host'] = intranetHost;
        return this;
    }
    public set intranetHost(intranetHost: string  | undefined) {
        this['intranet_host'] = intranetHost;
    }
    public get intranetHost(): string | undefined {
        return this['intranet_host'];
    }
    public withExternalHost(externalHost: string): InstanceHostDTO {
        this['external_host'] = externalHost;
        return this;
    }
    public set externalHost(externalHost: string  | undefined) {
        this['external_host'] = externalHost;
    }
    public get externalHost(): string | undefined {
        return this['external_host'];
    }
    public withDomains(domains: Array<string>): InstanceHostDTO {
        this['domains'] = domains;
        return this;
    }
}