import { ReportAccountSessionNew } from './ReportAccountSessionNew';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountDbAccountSessionResponse extends SdkResponse {
    public body?: Array<ReportAccountSessionNew>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ReportAccountSessionNew>): CountDbAccountSessionResponse {
        this['body'] = body;
        return this;
    }
}