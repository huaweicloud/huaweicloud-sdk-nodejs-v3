import { ImageRemoveResult } from './ImageRemoveResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveImagesResponse extends SdkResponse {
    public results?: Array<ImageRemoveResult>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ImageRemoveResult>): RemoveImagesResponse {
        this['results'] = results;
        return this;
    }
}