

export class DeleteEventRequest {
    private 'function_urn': string | undefined;
    private 'event_id': string | undefined;
    public constructor(functionUrn?: any, eventId?: any) { 
        this['function_urn'] = functionUrn;
        this['event_id'] = eventId;
    }
    public withFunctionUrn(functionUrn: string): DeleteEventRequest {
        this['function_urn'] = functionUrn;
        return this;
    }
    public set functionUrn(functionUrn: string | undefined) {
        this['function_urn'] = functionUrn;
    }
    public get functionUrn() {
        return this['function_urn'];
    }
    public withEventId(eventId: string): DeleteEventRequest {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId() {
        return this['event_id'];
    }
}