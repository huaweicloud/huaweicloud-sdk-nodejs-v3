import { CheckResultResultBody } from './CheckResultResultBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunCheckResultResponse extends SdkResponse {
    public result?: CheckResultResultBody;
    public constructor() { 
        super();
    }
    public withResult(result: CheckResultResultBody): RunCheckResultResponse {
        this['result'] = result;
        return this;
    }
}