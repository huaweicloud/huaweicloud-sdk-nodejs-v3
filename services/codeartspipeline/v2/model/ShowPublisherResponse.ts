import { PublisherVO } from './PublisherVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPublisherResponse extends SdkResponse {
    public body?: { [key: string]: PublisherVO; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: PublisherVO; }): ShowPublisherResponse {
        this['body'] = body;
        return this;
    }
}