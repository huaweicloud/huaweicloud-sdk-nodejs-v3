import { CommonResponseErrorPageResultBasicAWInfo } from './CommonResponseErrorPageResultBasicAWInfo';
import { PageResultBasicAWInfo } from './PageResultBasicAWInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBasicAwInfoListSupportsSearchResponse extends SdkResponse {
    public code?: string;
    public error?: CommonResponseErrorPageResultBasicAWInfo;
    public reason?: string;
    public result?: PageResultBasicAWInfo;
    public status?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListBasicAwInfoListSupportsSearchResponse {
        this['code'] = code;
        return this;
    }
    public withError(error: CommonResponseErrorPageResultBasicAWInfo): ListBasicAwInfoListSupportsSearchResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): ListBasicAwInfoListSupportsSearchResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: PageResultBasicAWInfo): ListBasicAwInfoListSupportsSearchResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListBasicAwInfoListSupportsSearchResponse {
        this['status'] = status;
        return this;
    }
}