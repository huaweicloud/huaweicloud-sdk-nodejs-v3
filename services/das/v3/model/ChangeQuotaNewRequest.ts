import { ChangeQuotaNewRequestBody } from './ChangeQuotaNewRequestBody';


export class ChangeQuotaNewRequest {
    public body?: ChangeQuotaNewRequestBody;
    public constructor() { 
    }
    public withBody(body: ChangeQuotaNewRequestBody): ChangeQuotaNewRequest {
        this['body'] = body;
        return this;
    }
}