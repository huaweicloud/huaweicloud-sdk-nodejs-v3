import { ObjectIdInfo } from './ObjectIdInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ImportLineageResponse extends SdkResponse {
    public body?: Array<ObjectIdInfo>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ObjectIdInfo>): ImportLineageResponse {
        this['body'] = body;
        return this;
    }
}