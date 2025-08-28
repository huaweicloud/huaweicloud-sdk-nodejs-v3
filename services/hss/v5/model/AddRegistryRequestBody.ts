

export class AddRegistryRequestBody {
    private 'registry_name'?: string;
    private 'registry_type'?: string;
    private 'api_version'?: string;
    public protocol?: string;
    private 'registry_addr'?: string;
    private 'registry_username'?: string;
    private 'registry_password'?: string;
    public namespace?: string;
    private 'connect_cluster_id'?: string;
    private 'get_scan_image_channel'?: string;
    public constructor(registryName?: string, registryType?: string, apiVersion?: string, protocol?: string, registryAddr?: string, registryUsername?: string, registryPassword?: string, connectClusterId?: string, getScanImageChannel?: string) { 
        this['registry_name'] = registryName;
        this['registry_type'] = registryType;
        this['api_version'] = apiVersion;
        this['protocol'] = protocol;
        this['registry_addr'] = registryAddr;
        this['registry_username'] = registryUsername;
        this['registry_password'] = registryPassword;
        this['connect_cluster_id'] = connectClusterId;
        this['get_scan_image_channel'] = getScanImageChannel;
    }
    public withRegistryName(registryName: string): AddRegistryRequestBody {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryType(registryType: string): AddRegistryRequestBody {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withApiVersion(apiVersion: string): AddRegistryRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withProtocol(protocol: string): AddRegistryRequestBody {
        this['protocol'] = protocol;
        return this;
    }
    public withRegistryAddr(registryAddr: string): AddRegistryRequestBody {
        this['registry_addr'] = registryAddr;
        return this;
    }
    public set registryAddr(registryAddr: string  | undefined) {
        this['registry_addr'] = registryAddr;
    }
    public get registryAddr(): string | undefined {
        return this['registry_addr'];
    }
    public withRegistryUsername(registryUsername: string): AddRegistryRequestBody {
        this['registry_username'] = registryUsername;
        return this;
    }
    public set registryUsername(registryUsername: string  | undefined) {
        this['registry_username'] = registryUsername;
    }
    public get registryUsername(): string | undefined {
        return this['registry_username'];
    }
    public withRegistryPassword(registryPassword: string): AddRegistryRequestBody {
        this['registry_password'] = registryPassword;
        return this;
    }
    public set registryPassword(registryPassword: string  | undefined) {
        this['registry_password'] = registryPassword;
    }
    public get registryPassword(): string | undefined {
        return this['registry_password'];
    }
    public withNamespace(namespace: string): AddRegistryRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withConnectClusterId(connectClusterId: string): AddRegistryRequestBody {
        this['connect_cluster_id'] = connectClusterId;
        return this;
    }
    public set connectClusterId(connectClusterId: string  | undefined) {
        this['connect_cluster_id'] = connectClusterId;
    }
    public get connectClusterId(): string | undefined {
        return this['connect_cluster_id'];
    }
    public withGetScanImageChannel(getScanImageChannel: string): AddRegistryRequestBody {
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