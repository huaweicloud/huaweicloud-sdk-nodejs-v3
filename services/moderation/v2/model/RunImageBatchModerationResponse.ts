import { ImageBatchModerationResultBody } from './ImageBatchModerationResultBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunImageBatchModerationResponse extends SdkResponse {
    public result?: Array<ImageBatchModerationResultBody>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<ImageBatchModerationResultBody>): RunImageBatchModerationResponse {
        this['result'] = result;
        return this;
    }
}