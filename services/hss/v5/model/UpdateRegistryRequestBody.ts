

export class UpdateRegistryRequestBody {
    private 'api_version'?: string;
    public protocol?: string;
    private 'registry_addr'?: string;
    private 'registry_username'?: string;
    private 'registry_password'?: string;
    public namespace?: string;
    private 'connect_cluster_id'?: string;
    private 'get_scan_image_channel'?: string;
    public constructor() { 
    }
    public withApiVersion(apiVersion: string): UpdateRegistryRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withProtocol(protocol: string): UpdateRegistryRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withRegistryAddr(registryAddr: string): UpdateRegistryRequestBody {
        this['registry_addr'] = registryAddr;
        return this;
    }
    public set registryAddr(registryAddr: string  | undefined) {
        this['registry_addr'] = registryAddr;
    }
    public get registryAddr(): string | undefined {
        return this['registry_addr'];
    }
    public withRegistryUsername(registryUsername: string): UpdateRegistryRequestBody {
        this['registry_username'] = registryUsername;
        return this;
    }
    public set registryUsername(registryUsername: string  | undefined) {
        this['registry_username'] = registryUsername;
    }
    public get registryUsername(): string | undefined {
        return this['registry_username'];
    }
    public withRegistryPassword(registryPassword: string): UpdateRegistryRequestBody {
        this['registry_password'] = registryPassword;
        return this;
    }
    public set registryPassword(registryPassword: string  | undefined) {
        this['registry_password'] = registryPassword;
    }
    public get registryPassword(): string | undefined {
        return this['registry_password'];
    }
    public withNamespace(namespace: string): UpdateRegistryRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withConnectClusterId(connectClusterId: string): UpdateRegistryRequestBody {
        this['connect_cluster_id'] = connectClusterId;
        return this;
    }
    public set connectClusterId(connectClusterId: string  | undefined) {
        this['connect_cluster_id'] = connectClusterId;
    }
    public get connectClusterId(): string | undefined {
        return this['connect_cluster_id'];
    }
    public withGetScanImageChannel(getScanImageChannel: string): UpdateRegistryRequestBody {
        this['get_scan_image_channel'] = getScanImageChannel;
        return this;
    }
    public set getScanImageChannel(getScanImageChannel: string  | undefined) {
        this['get_scan_image_channel'] = getScanImageChannel;
    }
    public get getScanImageChannel(): string | undefined {
        return this['get_scan_image_channel'];
    }
}