

export class GroupModel {
    public source?: string;
    public address?: string;
    private 'mount_path'?: string;
    private 'host_cache'?: boolean;
    private 'efs_sub_path'?: string;
    private 'read_only'?: boolean;
    private 'os_warm_up'?: boolean;
    private 'source_name'?: string;
    private 'asset_id'?: string;
    public constructor(source?: string, mountPath?: string) { 
        this['source'] = source;
        this['mount_path'] = mountPath;
    }
    public withSource(source: string): GroupModel {
        this['source'] = source;
        return this;
    }
    public withAddress(address: string): GroupModel {
        this['address'] = address;
        return this;
    }
    public withMountPath(mountPath: string): GroupModel {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
    public withHostCache(hostCache: boolean): GroupModel {
        this['host_cache'] = hostCache;
        return this;
    }
    public set hostCache(hostCache: boolean  | undefined) {
        this['host_cache'] = hostCache;
    }
    public get hostCache(): boolean | undefined {
        return this['host_cache'];
    }
    public withEfsSubPath(efsSubPath: string): GroupModel {
        this['efs_sub_path'] = efsSubPath;
        return this;
    }
    public set efsSubPath(efsSubPath: string  | undefined) {
        this['efs_sub_path'] = efsSubPath;
    }
    public get efsSubPath(): string | undefined {
        return this['efs_sub_path'];
    }
    public withReadOnly(readOnly: boolean): GroupModel {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
    public withOsWarmUp(osWarmUp: boolean): GroupModel {
        this['os_warm_up'] = osWarmUp;
        return this;
    }
    public set osWarmUp(osWarmUp: boolean  | undefined) {
        this['os_warm_up'] = osWarmUp;
    }
    public get osWarmUp(): boolean | undefined {
        return this['os_warm_up'];
    }
    public withSourceName(sourceName: string): GroupModel {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
    public withAssetId(assetId: string): GroupModel {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
}