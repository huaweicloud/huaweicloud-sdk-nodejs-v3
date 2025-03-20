import { ImageCacheBuildingConfig } from './ImageCacheBuildingConfig';


export class CreateImageCacheRequestBody {
    public name?: string;
    public images?: Array<string>;
    private 'image_cache_size'?: number;
    private 'retention_days'?: number;
    private 'building_config'?: ImageCacheBuildingConfig;
    public constructor(name?: string, images?: Array<string>, buildingConfig?: ImageCacheBuildingConfig) { 
        this['name'] = name;
        this['images'] = images;
        this['building_config'] = buildingConfig;
    }
    public withName(name: string): CreateImageCacheRequestBody {
        this['name'] = name;
        return this;
    }
    public withImages(images: Array<string>): CreateImageCacheRequestBody {
        this['images'] = images;
        return this;
    }
    public withImageCacheSize(imageCacheSize: number): CreateImageCacheRequestBody {
        this['image_cache_size'] = imageCacheSize;
        return this;
    }
    public set imageCacheSize(imageCacheSize: number  | undefined) {
        this['image_cache_size'] = imageCacheSize;
    }
    public get imageCacheSize(): number | undefined {
        return this['image_cache_size'];
    }
    public withRetentionDays(retentionDays: number): CreateImageCacheRequestBody {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withBuildingConfig(buildingConfig: ImageCacheBuildingConfig): CreateImageCacheRequestBody {
        this['building_config'] = buildingConfig;
        return this;
    }
    public set buildingConfig(buildingConfig: ImageCacheBuildingConfig  | undefined) {
        this['building_config'] = buildingConfig;
    }
    public get buildingConfig(): ImageCacheBuildingConfig | undefined {
        return this['building_config'];
    }
}