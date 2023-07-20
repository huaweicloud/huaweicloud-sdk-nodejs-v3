import { ShowMessagesRespMessages } from './ShowMessagesRespMessages';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMessagesResponse extends SdkResponse {
    public messages?: Array<ShowMessagesRespMessages>;
    private 'messages_count'?: number;
    private 'offsets_count'?: number;
    public offset?: number;
    public constructor() { 
        super();
    }
    public withMessages(messages: Array<ShowMessagesRespMessages>): ShowMessagesResponse {
        this['messages'] = messages;
        return this;
    }
    public withMessagesCount(messagesCount: number): ShowMessagesResponse {
        this['messages_count'] = messagesCount;
        return this;
    }
    public set messagesCount(messagesCount: number  | undefined) {
        this['messages_count'] = messagesCount;
    }
    public get messagesCount(): number | undefined {
        return this['messages_count'];
    }
    public withOffsetsCount(offsetsCount: number): ShowMessagesResponse {
        this['offsets_count'] = offsetsCount;
        return this;
    }
    public set offsetsCount(offsetsCount: number  | undefined) {
        this['offsets_count'] = offsetsCount;
    }
    public get offsetsCount(): number | undefined {
        return this['offsets_count'];
    }
    public withOffset(offset: number): ShowMessagesResponse {
        this['offset'] = offset;
        return this;
    }
}