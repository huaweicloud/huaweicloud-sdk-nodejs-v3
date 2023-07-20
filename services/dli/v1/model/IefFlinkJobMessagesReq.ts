import { State } from './State';


export class IefFlinkJobMessagesReq {
    private 'message_id'?: string;
    public state?: State;
    public constructor(messageId?: string) { 
        this['message_id'] = messageId;
    }
    public withMessageId(messageId: string): IefFlinkJobMessagesReq {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
    public withState(state: State): IefFlinkJobMessagesReq {
        this['state'] = state;
        return this;
    }
}