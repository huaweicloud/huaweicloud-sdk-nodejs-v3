import { ThumbnailRsp } from './ThumbnailRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListThumbnailDetailsResponse extends SdkResponse {
    public total?: number;
    private 'thumbnail_result'?: Array<ThumbnailRsp>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListThumbnailDetailsResponse {
        this['total'] = total;
        return this;
    }
    public withThumbnailResult(thumbnailResult: Array<ThumbnailRsp>): ListThumbnailDetailsResponse {
        this['thumbnail_result'] = thumbnailResult;
        return this;
    }
    public set thumbnailResult(thumbnailResult: Array<ThumbnailRsp>  | undefined) {
        this['thumbnail_result'] = thumbnailResult;
    }
    public get thumbnailResult(): Array<ThumbnailRsp> | undefined {
        return this['thumbnail_result'];
    }
}