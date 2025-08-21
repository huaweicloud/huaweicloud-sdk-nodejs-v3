import { WebhookLogExtendDto } from './WebhookLogExtendDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectWebhookLogsResponse extends SdkResponse {
    public body?: Array<WebhookLogExtendDto>;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBody(body: Array<WebhookLogExtendDto>): ListProjectWebhookLogsResponse {
        this['body'] = body;
        return this;
    }
    public withXTotal(xTotal: string): ListProjectWebhookLogsResponse {
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