import { EventStreamingOperateReq } from './EventStreamingOperateReq';


export class ResumeEventStreamingRequest {
    private 'eventstreaming_id'?: string;
    public body?: EventStreamingOperateReq;
    public constructor(eventstreamingId?: string) { 
        this['eventstreaming_id'] = eventstreamingId;
    }
    public withEventstreamingId(eventstreamingId: string): ResumeEventStreamingRequest {
        this['eventstreaming_id'] = eventstreamingId;
        return this;
    }
    public set eventstreamingId(eventstreamingId: string  | undefined) {
        this['eventstreaming_id'] = eventstreamingId;
    }
    public get eventstreamingId(): string | undefined {
        return this['eventstreaming_id'];
    }
    public withBody(body: EventStreamingOperateReq): ResumeEventStreamingRequest {
        this['body'] = body;
        return this;
    }
}