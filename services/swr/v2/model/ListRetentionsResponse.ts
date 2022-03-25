import { Retention } from './Retention';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRetentionsResponse extends SdkResponse {
    public body?: Array<Retention>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Retention>): ListRetentionsResponse {
        this['body'] = body;
        return this;
    }
}