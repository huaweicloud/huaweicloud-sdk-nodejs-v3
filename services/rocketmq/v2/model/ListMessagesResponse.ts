import { Message } from './Message';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessagesResponse extends SdkResponse {
    public messages?: Array<Message>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withMessages(messages: Array<Message>): ListMessagesResponse {
        this['messages'] = messages;
        return this;
    }
    public withTotal(total: number): ListMessagesResponse {
        this['total'] = total;
        return this;
    }
}