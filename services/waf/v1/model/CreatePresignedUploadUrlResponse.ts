import { ImageUploadResult } from './ImageUploadResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePresignedUploadUrlResponse extends SdkResponse {
    public results?: Array<ImageUploadResult>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ImageUploadResult>): CreatePresignedUploadUrlResponse {
        this['results'] = results;
        return this;
    }
}