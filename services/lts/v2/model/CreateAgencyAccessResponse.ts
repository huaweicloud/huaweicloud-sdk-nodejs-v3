import { LTSAccessConfigInfoRespon200 } from './LTSAccessConfigInfoRespon200';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAgencyAccessResponse extends SdkResponse {
    public body?: Array<LTSAccessConfigInfoRespon200>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<LTSAccessConfigInfoRespon200>): CreateAgencyAccessResponse {
        this['body'] = body;
        return this;
    }
}