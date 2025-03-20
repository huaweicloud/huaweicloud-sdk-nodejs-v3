import { ImageCacheBuildingConfig } from './ImageCacheBuildingConfig';


export class ImageCacheDetail {
    public name?: string;
    public id?: string;
    private 'created_at'?: string;
    public images?: Array<string>;
    private 'image_cache_size'?: number;
    private 'retention_days'?: number;
    private 'building_config'?: ImageCacheBuildingConfig;
    public status?: ImageCacheDetailStatusEnum | string;
    public message?: string;
    public constructor(name?: string, id?: string, createdAt?: string, images?: Array<string>, imageCacheSize?: number, retentionDays?: number, buildingConfig?: ImageCacheBuildingConfig, status?: string) { 
        this['name'] = name;
        this['id'] = id;
        this['created_at'] = createdAt;
        this['images'] = images;
        this['image_cache_size'] = imageCacheSize;
        this['retention_days'] = retentionDays;
        this['building_config'] = buildingConfig;
        this['status'] = status;
    }
    public withName(name: string): ImageCacheDetail {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ImageCacheDetail {
        this['id'] = id;
        return this;
    }
    public withCreatedAt(createdAt: string): ImageCacheDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withImages(images: Array<string>): ImageCacheDetail {
        this['images'] = images;
        return this;
    }
    public withImageCacheSize(imageCacheSize: number): ImageCacheDetail {
        this['image_cache_size'] = imageCacheSize;
        return this;
    }
    public set imageCacheSize(imageCacheSize: number  | undefined) {
        this['image_cache_size'] = imageCacheSize;
    }
    public get imageCacheSize(): number | undefined {
        return this['image_cache_size'];
    }
    public withRetentionDays(retentionDays: number): ImageCacheDetail {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withBuildingConfig(buildingConfig: ImageCacheBuildingConfig): ImageCacheDetail {
        this['building_config'] = buildingConfig;
        return this;
    }
    public set buildingConfig(buildingConfig: ImageCacheBuildingConfig  | undefined) {
        this['building_config'] = buildingConfig;
    }
    public get buildingConfig(): ImageCacheBuildingConfig | undefined {
        return this['building_config'];
    }
    public withStatus(status: ImageCacheDetailStatusEnum | string): ImageCacheDetail {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ImageCacheDetail {
        this['message'] = message;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ImageCacheDetailStatusEnum {
    AVAILABLE = 'Available',
    UNAVAILABLE = 'Unavailable',
    CREATING = 'Creating',
    DELETING = 'Deleting',
    FAILED = 'Failed'
}
