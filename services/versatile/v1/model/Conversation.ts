import { Message } from './Message';


export class Conversation {
    public lastUpdateTime?: number;
    public messageList?: Array<Message>;
    public constructor() { 
    }
    public withLastUpdateTime(lastUpdateTime: number): Conversation {
        this['lastUpdateTime'] = lastUpdateTime;
        return this;
    }
    public withMessageList(messageList: Array<Message>): Conversation {
        this['messageList'] = messageList;
        return this;
    }
}