import { ReportClientSessionNew } from './ReportClientSessionNew';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountDbClientSessionResponse extends SdkResponse {
    public body?: Array<ReportClientSessionNew>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ReportClientSessionNew>): CountDbClientSessionResponse {
        this['body'] = body;
        return this;
    }
}