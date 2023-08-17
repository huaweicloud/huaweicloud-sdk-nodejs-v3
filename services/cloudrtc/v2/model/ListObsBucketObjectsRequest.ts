

export class ListObsBucketObjectsRequest {
    public bucket?: string;
    public prefix?: string;
    public type?: ListObsBucketObjectsRequestTypeEnum | string;
    public location?: ListObsBucketObjectsRequestLocationEnum | string;
    public constructor(bucket?: string, type?: string, location?: string) { 
        this['bucket'] = bucket;
        this['type'] = type;
        this['location'] = location;
    }
    public withBucket(bucket: string): ListObsBucketObjectsRequest {
        this['bucket'] = bucket;
        return this;
    }
    public withPrefix(prefix: string): ListObsBucketObjectsRequest {
        this['prefix'] = prefix;
        return this;
    }
    public withType(type: ListObsBucketObjectsRequestTypeEnum | string): ListObsBucketObjectsRequest {
        this['type'] = type;
        return this;
    }
    public withLocation(location: ListObsBucketObjectsRequestLocationEnum | string): ListObsBucketObjectsRequest {
        this['location'] = location;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListObsBucketObjectsRequestTypeEnum {
    FOLDERS = 'folders',
    OBJECTS = 'objects'
}
/**
    * @export
    * @enum {string}
    */
export enum ListObsBucketObjectsRequestLocationEnum {
    CN_NORTH_4 = 'cn-north-4',
    CN_NORTH_1 = 'cn-north-1',
    CN_NORTH_5 = 'cn-north-5',
    CN_NORTH_6 = 'cn-north-6',
    CN_SOUTH_1 = 'cn-south-1',
    CN_EAST_2 = 'cn-east-2'
}
