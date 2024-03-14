import { RefererRsp } from './RefererRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReferResponse extends SdkResponse {
    public referer?: RefererRsp;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withReferer(referer: RefererRsp): ShowReferResponse {
        this['referer'] = referer;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowReferResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}