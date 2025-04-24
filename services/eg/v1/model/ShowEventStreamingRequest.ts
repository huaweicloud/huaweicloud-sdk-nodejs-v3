

export class ShowEventStreamingRequest {
    private 'eventstreaming_id'?: string;
    public constructor(eventstreamingId?: string) { 
        this['eventstreaming_id'] = eventstreamingId;
    }
    public withEventstreamingId(eventstreamingId: string): ShowEventStreamingRequest {
        this['eventstreaming_id'] = eventstreamingId;
        return this;
    }
    public set eventstreamingId(eventstreamingId: string  | undefined) {
        this['eventstreaming_id'] = eventstreamingId;
    }
    public get eventstreamingId(): string | undefined {
        return this['eventstreaming_id'];
    }
}