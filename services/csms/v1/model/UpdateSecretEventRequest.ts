import { UpdateSecretEventRequestBody } from './UpdateSecretEventRequestBody';


export class UpdateSecretEventRequest {
    private 'event_name'?: string;
    public body?: UpdateSecretEventRequestBody;
    public constructor(eventName?: string) { 
        this['event_name'] = eventName;
    }
    public withEventName(eventName: string): UpdateSecretEventRequest {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withBody(body: UpdateSecretEventRequestBody): UpdateSecretEventRequest {
        this['body'] = body;
        return this;
    }
}