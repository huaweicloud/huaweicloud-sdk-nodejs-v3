

export class RestSubscriberInPic {
    public index?: number;
    public subscriber?: Array<string>;
    public isAssistStream?: number;
    public constructor() { 
    }
    public withIndex(index: number): RestSubscriberInPic {
        this['index'] = index;
        return this;
    }
    public withSubscriber(subscriber: Array<string>): RestSubscriberInPic {
        this['subscriber'] = subscriber;
        return this;
    }
    public withIsAssistStream(isAssistStream: number): RestSubscriberInPic {
        this['isAssistStream'] = isAssistStream;
        return this;
    }
}