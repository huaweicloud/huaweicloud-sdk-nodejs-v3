import { WebhookDto } from './WebhookDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectWebhooksResponse extends SdkResponse {
    public body?: Array<WebhookDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<WebhookDto>): ListProjectWebhooksResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListProjectWebhooksResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}