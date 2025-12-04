import { ListObsBucketsResponseBody } from './ListObsBucketsResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListObsBucketsResponse extends SdkResponse {
    public body?: Array<ListObsBucketsResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ListObsBucketsResponseBody>): ListObsBucketsResponse {
        this['body'] = body;
        return this;
    }
}