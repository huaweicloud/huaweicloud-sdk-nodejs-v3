

export class TriggerQpsDict {
    private 'http_request_pos_id'?: number;
    private 'http_packet_per_second'?: number;
    public constructor(httpRequestPosId?: number, httpPacketPerSecond?: number) { 
        this['http_request_pos_id'] = httpRequestPosId;
        this['http_packet_per_second'] = httpPacketPerSecond;
    }
    public withHttpRequestPosId(httpRequestPosId: number): TriggerQpsDict {
        this['http_request_pos_id'] = httpRequestPosId;
        return this;
    }
    public set httpRequestPosId(httpRequestPosId: number  | undefined) {
        this['http_request_pos_id'] = httpRequestPosId;
    }
    public get httpRequestPosId(): number | undefined {
        return this['http_request_pos_id'];
    }
    public withHttpPacketPerSecond(httpPacketPerSecond: number): TriggerQpsDict {
        this['http_packet_per_second'] = httpPacketPerSecond;
        return this;
    }
    public set httpPacketPerSecond(httpPacketPerSecond: number  | undefined) {
        this['http_packet_per_second'] = httpPacketPerSecond;
    }
    public get httpPacketPerSecond(): number | undefined {
        return this['http_packet_per_second'];
    }
}