import { MessagesEntity } from './MessagesEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceMessagesResponse extends SdkResponse {
    public messages?: Array<MessagesEntity>;
    public total?: number;
    public size?: number;
    public constructor() { 
        super();
    }
    public withMessages(messages: Array<MessagesEntity>): ShowInstanceMessagesResponse {
        this['messages'] = messages;
        return this;
    }
    public withTotal(total: number): ShowInstanceMessagesResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ShowInstanceMessagesResponse {
        this['size'] = size;
        return this;
    }
}