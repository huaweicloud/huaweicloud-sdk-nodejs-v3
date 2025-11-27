import { RecordSet } from './RecordSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRecordSetResponse extends SdkResponse {
    public body?: Array<RecordSet>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<RecordSet>): CreateRecordSetResponse {
        this['body'] = body;
        return this;
    }
}