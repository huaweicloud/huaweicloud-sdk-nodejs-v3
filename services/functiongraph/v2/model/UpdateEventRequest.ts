import { UpdateEventRequestBody } from './UpdateEventRequestBody';


export class UpdateEventRequest {
    private 'function_urn'?: string;
    private 'Content-Type'?: string;
    private 'event_id'?: string;
    public body?: UpdateEventRequestBody;
    public constructor(functionUrn?: string, contentType?: string, eventId?: string) { 
        this['function_urn'] = functionUrn;
        this['Content-Type'] = contentType;
        this['event_id'] = eventId;
    }
    public withFunctionUrn(functionUrn: string): UpdateEventRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string  | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn(): string | undefined {
        return this['function_urn'];
    }
    public withContentType(contentType: string): UpdateEventRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEventId(eventId: string): UpdateEventRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withBody(body: UpdateEventRequestBody): UpdateEventRequest {
        this['body'] = body;
        return this;
    }
}