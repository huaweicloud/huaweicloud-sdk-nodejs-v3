

export class TriggerBpsDict {
    private 'traffic_pos_id'?: number;
    private 'traffic_per_second'?: number;
    private 'packet_per_second'?: number;
    public constructor(trafficPosId?: number, trafficPerSecond?: number, packetPerSecond?: number) { 
        this['traffic_pos_id'] = trafficPosId;
        this['traffic_per_second'] = trafficPerSecond;
        this['packet_per_second'] = packetPerSecond;
    }
    public withTrafficPosId(trafficPosId: number): TriggerBpsDict {
        this['traffic_pos_id'] = trafficPosId;
        return this;
    }
    public set trafficPosId(trafficPosId: number  | undefined) {
        this['traffic_pos_id'] = trafficPosId;
    }
    public get trafficPosId(): number | undefined {
        return this['traffic_pos_id'];
    }
    public withTrafficPerSecond(trafficPerSecond: number): TriggerBpsDict {
        this['traffic_per_second'] = trafficPerSecond;
        return this;
    }
    public set trafficPerSecond(trafficPerSecond: number  | undefined) {
        this['traffic_per_second'] = trafficPerSecond;
    }
    public get trafficPerSecond(): number | undefined {
        return this['traffic_per_second'];
    }
    public withPacketPerSecond(packetPerSecond: number): TriggerBpsDict {
        this['packet_per_second'] = packetPerSecond;
        return this;
    }
    public set packetPerSecond(packetPerSecond: number  | undefined) {
        this['packet_per_second'] = packetPerSecond;
    }
    public get packetPerSecond(): number | undefined {
        return this['packet_per_second'];
    }
}