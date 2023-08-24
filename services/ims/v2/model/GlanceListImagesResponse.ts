import { GlanceShowImageListResponseBody } from './GlanceShowImageListResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceListImagesResponse extends SdkResponse {
    public first?: string;
    public images?: Array<GlanceShowImageListResponseBody>;
    public schema?: string;
    public next?: string;
    public constructor() { 
        super();
    }
    public withFirst(first: string): GlanceListImagesResponse {
        this['first'] = first;
        return this;
    }
    public withImages(images: Array<GlanceShowImageListResponseBody>): GlanceListImagesResponse {
        this['images'] = images;
        return this;
    }
    public withSchema(schema: string): GlanceListImagesResponse {
        this['schema'] = schema;
        return this;
    }
    public withNext(next: string): GlanceListImagesResponse {
        this['next'] = next;
        return this;
    }
}