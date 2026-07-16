

export class AssetModel {
    public name?: string;
    public code?: string;
    public version?: string;
    public desc?: string;
    public series?: string;
    public type?: string;
    private 'model_desc'?: string;
    private 'parent_asset_id'?: string;
    public constructor(name?: string, version?: string, type?: string) { 
        this['name'] = name;
        this['version'] = version;
        this['type'] = type;
    }
    public withName(name: string): AssetModel {
        this['name'] = name;
        return this;
    }
    public withCode(code: string): AssetModel {
        this['code'] = code;
        return this;
    }
    public withVersion(version: string): AssetModel {
        this['version'] = version;
        return this;
    }
    public withDesc(desc: string): AssetModel {
        this['desc'] = desc;
        return this;
    }
    public withSeries(series: string): AssetModel {
        this['series'] = series;
        return this;
    }
    public withType(type: string): AssetModel {
        this['type'] = type;
        return this;
    }
    public withModelDesc(modelDesc: string): AssetModel {
        this['model_desc'] = modelDesc;
        return this;
    }
    public set modelDesc(modelDesc: string  | undefined) {
        this['model_desc'] = modelDesc;
    }
    public get modelDesc(): string | undefined {
        return this['model_desc'];
    }
    public withParentAssetId(parentAssetId: string): AssetModel {
        this['parent_asset_id'] = parentAssetId;
        return this;
    }
    public set parentAssetId(parentAssetId: string  | undefined) {
        this['parent_asset_id'] = parentAssetId;
    }
    public get parentAssetId(): string | undefined {
        return this['parent_asset_id'];
    }
}