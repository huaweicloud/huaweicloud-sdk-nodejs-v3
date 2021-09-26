

export class DeleteEventRequest {
    private 'event_id': string | undefined;
    private 'function_urn': string | undefined;
    public constructor(eventId?: any, functionUrn?: any) { 
        this['event_id'] = eventId;
        this['function_urn'] = functionUrn;
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
}