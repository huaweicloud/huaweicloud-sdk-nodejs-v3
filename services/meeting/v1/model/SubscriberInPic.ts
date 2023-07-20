

export class SubscriberInPic {
    public index?: number;
    public subscriber?: Array<string>;
    public isAssistStream?: number;
    public constructor(index?: number) { 
        this['index'] = index;
    }
    public withIndex(index: number): SubscriberInPic {
        this['index'] = index;
        return this;
    }
    public withSubscriber(subscriber: Array<string>): SubscriberInPic {
        this['subscriber'] = subscriber;
        return this;
    }
    public withIsAssistStream(isAssistStream: number): SubscriberInPic {
        this['isAssistStream'] = isAssistStream;
        return this;
    }
}