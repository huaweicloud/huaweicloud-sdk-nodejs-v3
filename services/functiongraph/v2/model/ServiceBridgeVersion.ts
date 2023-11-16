

export class ServiceBridgeVersion {
    public name?: string;
    public version?: string;
    private 'code_url'?: string;
    public constructor() { 
    }
    public withName(name: string): ServiceBridgeVersion {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): ServiceBridgeVersion {
        this['version'] = version;
        return this;
    }
    public withCodeUrl(codeUrl: string): ServiceBridgeVersion {
        this['code_url'] = codeUrl;
        return this;
    }
    public set codeUrl(codeUrl: string  | undefined) {
        this['code_url'] = codeUrl;
    }
    public get codeUrl(): string | undefined {
        return this['code_url'];
    }
}