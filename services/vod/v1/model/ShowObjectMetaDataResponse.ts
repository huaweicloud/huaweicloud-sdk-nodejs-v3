import { ObjectList } from './ObjectList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowObjectMetaDataResponse extends SdkResponse {
    public bucket?: string;
    private 'next_marker'?: string;
    private 'object_list'?: Array<ObjectList>;
    public constructor() { 
        super();
    }
    public withBucket(bucket: string): ShowObjectMetaDataResponse {
        this['bucket'] = bucket;
        return this;
    }
    public withNextMarker(nextMarker: string): ShowObjectMetaDataResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: string  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): string | undefined {
        return this['next_marker'];
    }
    public withObjectList(objectList: Array<ObjectList>): ShowObjectMetaDataResponse {
        this['object_list'] = objectList;
        return this;
    }
    public set objectList(objectList: Array<ObjectList>  | undefined) {
        this['object_list'] = objectList;
    }
    public get objectList(): Array<ObjectList> | undefined {
        return this['object_list'];
    }
}