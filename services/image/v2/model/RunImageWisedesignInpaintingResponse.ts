import { ImageWisedesignInpaintingResponseResult } from './ImageWisedesignInpaintingResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunImageWisedesignInpaintingResponse extends SdkResponse {
    public result?: ImageWisedesignInpaintingResponseResult;
    public constructor() { 
        super();
    }
    public withResult(result: ImageWisedesignInpaintingResponseResult): RunImageWisedesignInpaintingResponse {
        this['result'] = result;
        return this;
    }
}