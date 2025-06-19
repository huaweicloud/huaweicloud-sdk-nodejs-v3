import { CheckWebhookUrlRequestBody } from './CheckWebhookUrlRequestBody';


export class CheckWebhookUrlRequest {
    public body?: CheckWebhookUrlRequestBody;
    public constructor() { 
    }
    public withBody(body: CheckWebhookUrlRequestBody): CheckWebhookUrlRequest {
        this['body'] = body;
        return this;
    }
}