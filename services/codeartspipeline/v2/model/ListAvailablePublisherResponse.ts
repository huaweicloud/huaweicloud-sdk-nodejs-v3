import { PublisherVO } from './PublisherVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAvailablePublisherResponse extends SdkResponse {
    public body?: Array<PublisherVO>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PublisherVO>): ListAvailablePublisherResponse {
        this['body'] = body;
        return this;
    }
}