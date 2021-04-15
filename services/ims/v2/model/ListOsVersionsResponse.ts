import { ListOsVersionsResponseBody } from './ListOsVersionsResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOsVersionsResponse extends SdkResponse {
    public body?: Array<ListOsVersionsResponseBody>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ListOsVersionsResponseBody>): ListOsVersionsResponse {
        this['body'] = body;
        return this;
    }
}