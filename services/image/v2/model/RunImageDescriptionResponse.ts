import { ImageDescriptionResponseResult } from './ImageDescriptionResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunImageDescriptionResponse extends SdkResponse {
    public result?: ImageDescriptionResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: ImageDescriptionResponseResult): RunImageDescriptionResponse {
        this['result'] = result;
        return this;
    }
}