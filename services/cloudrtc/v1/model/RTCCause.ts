

export class RTCCause {
    public ts?: string;
    private 'event_id'?: string;
    private 'peer_id'?: string;
    public constructor() { 
    }
    public withTs(ts: string): RTCCause {
        this['ts'] = ts;
        return this;
    }
    public withEventId(eventId: string): RTCCause {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withPeerId(peerId: string): RTCCause {
        this['peer_id'] = peerId;
        return this;
    }
    public set peerId(peerId: string  | undefined) {
        this['peer_id'] = peerId;
    }
    public get peerId(): string | undefined {
        return this['peer_id'];
    }
}