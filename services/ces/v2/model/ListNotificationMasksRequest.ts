import { ListNotificationMaskRequestBody } from './ListNotificationMaskRequestBody';


export class ListNotificationMasksRequest {
    public offset?: number;
    public limit?: number;
    public body?: ListNotificationMaskRequestBody;
    public constructor() { 
    }
    public withOffset(offset: number): ListNotificationMasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNotificationMasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: ListNotificationMaskRequestBody): ListNotificationMasksRequest {
        this['body'] = body;
        return this;
    }
}