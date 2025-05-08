import { ObjectMetaData } from './ObjectMetaData';


export class ObjectList {
    private 'object'?: string;
    private 'asset_id'?: string;
    private 'meta_data'?: ObjectMetaData;
    public constructor() { 
    }
    public withModelObject(modelObject: string): ObjectList {
        this['object'] = modelObject;
        return this;
    }
    public set modelObject(modelObject: string  | undefined) {
        this['object'] = modelObject;
    }
    public get modelObject(): string | undefined {
        return this['object'];
    }
    public withAssetId(assetId: string): ObjectList {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withMetaData(metaData: ObjectMetaData): ObjectList {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: ObjectMetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): ObjectMetaData | undefined {
        return this['meta_data'];
    }
}