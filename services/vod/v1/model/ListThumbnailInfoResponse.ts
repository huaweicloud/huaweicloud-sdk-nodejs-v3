import { QueryThumbnailInfo } from './QueryThumbnailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListThumbnailInfoResponse extends SdkResponse {
    public total?: number;
    public thumbnails?: Array<QueryThumbnailInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListThumbnailInfoResponse {
        this['total'] = total;
        return this;
    }
    public withThumbnails(thumbnails: Array<QueryThumbnailInfo>): ListThumbnailInfoResponse {
        this['thumbnails'] = thumbnails;
        return this;
    }
}