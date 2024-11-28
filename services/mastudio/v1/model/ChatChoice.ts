import { MessageItem } from './MessageItem';


export class ChatChoice {
    public index?: number;
    public message?: MessageItem;
    public constructor(index?: number, message?: MessageItem) { 
        this['index'] = index;
        this['message'] = message;
    }
    public withIndex(index: number): ChatChoice {
        this['index'] = index;
        return this;
    }
    public withMessage(message: MessageItem): ChatChoice {
        this['message'] = message;
        return this;
    }
}