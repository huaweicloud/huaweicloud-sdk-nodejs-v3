import { GlanceShowImageResponseBody } from './GlanceShowImageResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GlanceListImagesResponse extends SdkResponse {
    public first?: string;
    public images?: Array<GlanceShowImageResponseBody>;
    public schema?: string;
    public next?: string;
    public constructor() { 
        super();
    }
    public withFirst(first: string): GlanceListImagesResponse {
        this['first'] = first;
        return this;
    }
    public withImages(images: Array<GlanceShowImageResponseBody>): GlanceListImagesResponse {
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