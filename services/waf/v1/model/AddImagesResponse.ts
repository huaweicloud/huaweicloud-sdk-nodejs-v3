import { ImageAddResult } from './ImageAddResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddImagesResponse extends SdkResponse {
    public results?: Array<ImageAddResult>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ImageAddResult>): AddImagesResponse {
        this['results'] = results;
        return this;
    }
}