import { UpdateEventRequestBody } from './UpdateEventRequestBody';


export class UpdateEventRequest {
    private 'function_urn': string | undefined;
    private 'event_id': string | undefined;
    public body?: UpdateEventRequestBody;
    public constructor(functionUrn?: any, eventId?: any) { 
        this['function_urn'] = functionUrn;
        this['event_id'] = eventId;
    }
    public withFunctionUrn(functionUrn: string): UpdateEventRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withEventId(eventId: string): UpdateEventRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId() {
        return this['event_id'];
    }
    public withBody(body: UpdateEventRequestBody): UpdateEventRequest {
        this['body'] = body;
        return this;
    }
}