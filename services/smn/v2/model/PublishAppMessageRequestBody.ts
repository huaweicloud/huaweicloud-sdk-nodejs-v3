

export class PublishAppMessageRequestBody {
    public message?: string;
    private 'message_structure'?: string | undefined;
    private 'time_to_live'?: string | undefined;
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
    public set messageStructure(messageStructure: string | undefined) {
        this['message_structure'] = messageStructure;
    }
    public get messageStructure() {
        return this['message_structure'];
    }
    public withTimeToLive(timeToLive: string): PublishAppMessageRequestBody {
        this['time_to_live'] = timeToLive;
        return this;
    }
    public set timeToLive(timeToLive: string | undefined) {
        this['time_to_live'] = timeToLive;
    }
    public get timeToLive() {
        return this['time_to_live'];
    }
}