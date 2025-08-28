

export class RegistryInfo {
    public id?: string;
    private 'registry_name'?: string;
    private 'registry_type'?: string;
    private 'api_version'?: string;
    public protocol?: string;
    private 'registry_addr'?: string;
    private 'registry_username'?: string;
    public namespace?: string;
    private 'connect_cluster_id'?: string;
    private 'get_scan_image_channel'?: string;
    public status?: string;
    private 'fail_reason'?: string;
    private 'images_num'?: number;
    private 'latest_sync_time'?: number;
    public constructor() { 
    }
    public withId(id: string): RegistryInfo {
        this['id'] = id;
        return this;
    }
    public withRegistryName(registryName: string): RegistryInfo {
        this['registry_name'] = registryName;
        return this;
    }
    public set registryName(registryName: string  | undefined) {
        this['registry_name'] = registryName;
    }
    public get registryName(): string | undefined {
        return this['registry_name'];
    }
    public withRegistryType(registryType: string): RegistryInfo {
        this['registry_type'] = registryType;
        return this;
    }
    public set registryType(registryType: string  | undefined) {
        this['registry_type'] = registryType;
    }
    public get registryType(): string | undefined {
        return this['registry_type'];
    }
    public withApiVersion(apiVersion: string): RegistryInfo {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: string  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): string | undefined {
        return this['api_version'];
    }
    public withProtocol(protocol: string): RegistryInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withRegistryAddr(registryAddr: string): RegistryInfo {
        this['registry_addr'] = registryAddr;
        return this;
    }
    public set registryAddr(registryAddr: string  | undefined) {
        this['registry_addr'] = registryAddr;
    }
    public get registryAddr(): string | undefined {
        return this['registry_addr'];
    }
    public withRegistryUsername(registryUsername: string): RegistryInfo {
        this['registry_username'] = registryUsername;
        return this;
    }
    public set registryUsername(registryUsername: string  | undefined) {
        this['registry_username'] = registryUsername;
    }
    public get registryUsername(): string | undefined {
        return this['registry_username'];
    }
    public withNamespace(namespace: string): RegistryInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withConnectClusterId(connectClusterId: string): RegistryInfo {
        this['connect_cluster_id'] = connectClusterId;
        return this;
    }
    public set connectClusterId(connectClusterId: string  | undefined) {
        this['connect_cluster_id'] = connectClusterId;
    }
    public get connectClusterId(): string | undefined {
        return this['connect_cluster_id'];
    }
    public withGetScanImageChannel(getScanImageChannel: string): RegistryInfo {
        this['get_scan_image_channel'] = getScanImageChannel;
        return this;
    }
    public set getScanImageChannel(getScanImageChannel: string  | undefined) {
        this['get_scan_image_channel'] = getScanImageChannel;
    }
    public get getScanImageChannel(): string | undefined {
        return this['get_scan_image_channel'];
    }
    public withStatus(status: string): RegistryInfo {
        this['status'] = status;
        return this;
    }
    public withFailReason(failReason: string): RegistryInfo {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withImagesNum(imagesNum: number): RegistryInfo {
        this['images_num'] = imagesNum;
        return this;
    }
    public set imagesNum(imagesNum: number  | undefined) {
        this['images_num'] = imagesNum;
    }
    public get imagesNum(): number | undefined {
        return this['images_num'];
    }
    public withLatestSyncTime(latestSyncTime: number): RegistryInfo {
        this['latest_sync_time'] = latestSyncTime;
        return this;
    }
    public set latestSyncTime(latestSyncTime: number  | undefined) {
        this['latest_sync_time'] = latestSyncTime;
    }
    public get latestSyncTime(): number | undefined {
        return this['latest_sync_time'];
    }
}