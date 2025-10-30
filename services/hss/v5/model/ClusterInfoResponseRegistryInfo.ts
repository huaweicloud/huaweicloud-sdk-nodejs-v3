

export class ClusterInfoResponseRegistryInfo {
    private 'registry_type'?: string;
    private 'registry_addr'?: string;
    private 'registry_username'?: string;
    public namespace?: string;
    public constructor() { 
    }
    public withRegistryType(registryType: string): ClusterInfoResponseRegistryInfo {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withRegistryAddr(registryAddr: string): ClusterInfoResponseRegistryInfo {
        this['registry_addr'] = registryAddr;
        return this;
    }
    public set registryAddr(registryAddr: string  | undefined) {
        this['registry_addr'] = registryAddr;
    }
    public get registryAddr(): string | undefined {
        return this['registry_addr'];
    }
    public withRegistryUsername(registryUsername: string): ClusterInfoResponseRegistryInfo {
        this['registry_username'] = registryUsername;
        return this;
    }
    public set registryUsername(registryUsername: string  | undefined) {
        this['registry_username'] = registryUsername;
    }
    public get registryUsername(): string | undefined {
        return this['registry_username'];
    }
    public withNamespace(namespace: string): ClusterInfoResponseRegistryInfo {
        this['namespace'] = namespace;
        return this;
    }
}