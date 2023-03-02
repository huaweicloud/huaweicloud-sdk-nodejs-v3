import { ImageWisedesignColorfilterResponseResult } from './ImageWisedesignColorfilterResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunImageWisedesignColorfilterResponse extends SdkResponse {
    public result?: ImageWisedesignColorfilterResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: ImageWisedesignColorfilterResponseResult): RunImageWisedesignColorfilterResponse {
        this['result'] = result;
        return this;
    }
}