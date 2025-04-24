import { EventStreamingUpdateReq } from './EventStreamingUpdateReq';


export class UpdateEventStreamingRequest {
    private 'eventstreaming_id'?: string;
    public body?: EventStreamingUpdateReq;
    public constructor(eventstreamingId?: string) { 
        this['eventstreaming_id'] = eventstreamingId;
    }
    public withEventstreamingId(eventstreamingId: string): UpdateEventStreamingRequest {
        this['eventstreaming_id'] = eventstreamingId;
        return this;
    }
    public set eventstreamingId(eventstreamingId: string  | undefined) {
        this['eventstreaming_id'] = eventstreamingId;
    }
    public get eventstreamingId(): string | undefined {
        return this['eventstreaming_id'];
    }
    public withBody(body: EventStreamingUpdateReq): UpdateEventStreamingRequest {
        this['body'] = body;
        return this;
    }
}