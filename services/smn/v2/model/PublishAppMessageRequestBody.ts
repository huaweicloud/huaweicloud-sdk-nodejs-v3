

export class PublishAppMessageRequestBody {
    public message?: string;
    private 'message_structure'?: string;
    private 'time_to_live'?: string;
    public constructor() { 
    }
    public withMessage(message: string): PublishAppMessageRequestBody {
        this['message'] = message;
        return this;
    }
    public withMessageStructure(messageStructure: string): PublishAppMessageRequestBody {
        this['message_structure'] = messageStructure;
        return this;
    }
    public set messageStructure(messageStructure: string  | undefined) {
        this['message_structure'] = messageStructure;
    }
    public get messageStructure(): string | undefined {
        return this['message_structure'];
    }
    public withTimeToLive(timeToLive: string): PublishAppMessageRequestBody {
        this['time_to_live'] = timeToLive;
        return this;
    }
    public set timeToLive(timeToLive: string  | undefined) {
        this['time_to_live'] = timeToLive;
    }
    public get timeToLive(): string | undefined {
        return this['time_to_live'];
    }
}