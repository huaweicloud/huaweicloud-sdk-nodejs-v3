import { Properties } from './Properties';


export class UpdateAssetReq {
    private 'asset_name'?: string;
    private 'asset_desc'?: string;
    private 'asset_group_desc'?: string;
    private 'asset_series'?: string;
    private 'asset_capabilities'?: Array<string>;
    public status?: UpdateAssetReqStatusEnum | string;
    public enabled?: boolean;
    private 'is_deleted'?: boolean;
    public tags?: { [key: string]: Array<string>; };
    public properties?: Properties;
    public constructor() { 
    }
    public withAssetName(assetName: string): UpdateAssetReq {
        this['asset_name'] = assetName;
        return this;
    }
    public set assetName(assetName: string  | undefined) {
        this['asset_name'] = assetName;
    }
    public get assetName(): string | undefined {
        return this['asset_name'];
    }
    public withAssetDesc(assetDesc: string): UpdateAssetReq {
        this['asset_desc'] = assetDesc;
        return this;
    }
    public set assetDesc(assetDesc: string  | undefined) {
        this['asset_desc'] = assetDesc;
    }
    public get assetDesc(): string | undefined {
        return this['asset_desc'];
    }
    public withAssetGroupDesc(assetGroupDesc: string): UpdateAssetReq {
        this['asset_group_desc'] = assetGroupDesc;
        return this;
    }
    public set assetGroupDesc(assetGroupDesc: string  | undefined) {
        this['asset_group_desc'] = assetGroupDesc;
    }
    public get assetGroupDesc(): string | undefined {
        return this['asset_group_desc'];
    }
    public withAssetSeries(assetSeries: string): UpdateAssetReq {
        this['asset_series'] = assetSeries;
        return this;
    }
    public set assetSeries(assetSeries: string  | undefined) {
        this['asset_series'] = assetSeries;
    }
    public get assetSeries(): string | undefined {
        return this['asset_series'];
    }
    public withAssetCapabilities(assetCapabilities: Array<string>): UpdateAssetReq {
        this['asset_capabilities'] = assetCapabilities;
        return this;
    }
    public set assetCapabilities(assetCapabilities: Array<string>  | undefined) {
        this['asset_capabilities'] = assetCapabilities;
    }
    public get assetCapabilities(): Array<string> | undefined {
        return this['asset_capabilities'];
    }
    public withStatus(status: UpdateAssetReqStatusEnum | string): UpdateAssetReq {
        this['status'] = status;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateAssetReq {
        this['enabled'] = enabled;
        return this;
    }
    public withIsDeleted(isDeleted: boolean): UpdateAssetReq {
        this['is_deleted'] = isDeleted;
        return this;
    }
    public set isDeleted(isDeleted: boolean  | undefined) {
        this['is_deleted'] = isDeleted;
    }
    public get isDeleted(): boolean | undefined {
        return this['is_deleted'];
    }
    public withTags(tags: { [key: string]: Array<string>; }): UpdateAssetReq {
        this['tags'] = tags;
        return this;
    }
    public withProperties(properties: Properties): UpdateAssetReq {
        this['properties'] = properties;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAssetReqStatusEnum {
    ONLINE = 'online',
    OFFLINE = 'offline',
    WAITING = 'waiting'
}
