import { Message } from './Message';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessagesForRocketMqResponse extends SdkResponse {
    public messages?: Array<Message>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withMessages(messages: Array<Message>): ListMessagesForRocketMqResponse {
        this['messages'] = messages;
        return this;
    }
    public withTotal(total: number): ListMessagesForRocketMqResponse {
        this['total'] = total;
        return this;
    }
}