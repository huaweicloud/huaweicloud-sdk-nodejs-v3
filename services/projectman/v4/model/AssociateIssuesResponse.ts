import { AssociateIpdIssuesResp } from './AssociateIpdIssuesResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateIssuesResponse extends SdkResponse {
    public body?: Array<AssociateIpdIssuesResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<AssociateIpdIssuesResp>): AssociateIssuesResponse {
        this['body'] = body;
        return this;
    }
}