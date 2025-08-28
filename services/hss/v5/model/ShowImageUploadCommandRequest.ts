

export class ShowImageUploadCommandRequest {
    private 'registry_addr'?: string;
    public namespace?: string;
    public username?: string;
    public password?: string;
    public constructor(registryAddr?: string, namespace?: string, username?: string, password?: string) { 
        this['registry_addr'] = registryAddr;
        this['namespace'] = namespace;
        this['username'] = username;
        this['password'] = password;
    }
    public withRegistryAddr(registryAddr: string): ShowImageUploadCommandRequest {
        this['registry_addr'] = registryAddr;
        return this;
    }
    public set registryAddr(registryAddr: string  | undefined) {
        this['registry_addr'] = registryAddr;
    }
    public get registryAddr(): string | undefined {
        return this['registry_addr'];
    }
    public withNamespace(namespace: string): ShowImageUploadCommandRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withUsername(username: string): ShowImageUploadCommandRequest {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): ShowImageUploadCommandRequest {
        this['password'] = password;
        return this;
    }
}