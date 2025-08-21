import { WebhookLogExtendDto } from './WebhookLogExtendDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGroupWebhookLogsResponse extends SdkResponse {
    public body?: Array<WebhookLogExtendDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<WebhookLogExtendDto>): ListGroupWebhookLogsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListGroupWebhookLogsResponse {
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