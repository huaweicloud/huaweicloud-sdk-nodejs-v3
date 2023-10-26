

export class ExtendDDoSSet {
    private 'SetID'?: number;
    private 'new_connection_limited'?: number;
    private 'total_connection_limited'?: number;
    private 'http_packet_per_second'?: number;
    private 'traffic_per_second'?: number;
    private 'packet_per_second'?: number;
    public constructor(setID?: number, newConnectionLimited?: number, totalConnectionLimited?: number, httpPacketPerSecond?: number, trafficPerSecond?: number, packetPerSecond?: number) { 
        this['SetID'] = setID;
        this['new_connection_limited'] = newConnectionLimited;
        this['total_connection_limited'] = totalConnectionLimited;
        this['http_packet_per_second'] = httpPacketPerSecond;
        this['traffic_per_second'] = trafficPerSecond;
        this['packet_per_second'] = packetPerSecond;
    }
    public withSetID(setID: number): ExtendDDoSSet {
        this['SetID'] = setID;
        return this;
    }
    public set setID(setID: number  | undefined) {
        this['SetID'] = setID;
    }
    public get setID(): number | undefined {
        return this['SetID'];
    }
    public withNewConnectionLimited(newConnectionLimited: number): ExtendDDoSSet {
        this['new_connection_limited'] = newConnectionLimited;
        return this;
    }
    public set newConnectionLimited(newConnectionLimited: number  | undefined) {
        this['new_connection_limited'] = newConnectionLimited;
    }
    public get newConnectionLimited(): number | undefined {
        return this['new_connection_limited'];
    }
    public withTotalConnectionLimited(totalConnectionLimited: number): ExtendDDoSSet {
        this['total_connection_limited'] = totalConnectionLimited;
        return this;
    }
    public set totalConnectionLimited(totalConnectionLimited: number  | undefined) {
        this['total_connection_limited'] = totalConnectionLimited;
    }
    public get totalConnectionLimited(): number | undefined {
        return this['total_connection_limited'];
    }
    public withHttpPacketPerSecond(httpPacketPerSecond: number): ExtendDDoSSet {
        this['http_packet_per_second'] = httpPacketPerSecond;
        return this;
    }
    public set httpPacketPerSecond(httpPacketPerSecond: number  | undefined) {
        this['http_packet_per_second'] = httpPacketPerSecond;
    }
    public get httpPacketPerSecond(): number | undefined {
        return this['http_packet_per_second'];
    }
    public withTrafficPerSecond(trafficPerSecond: number): ExtendDDoSSet {
        this['traffic_per_second'] = trafficPerSecond;
        return this;
    }
    public set trafficPerSecond(trafficPerSecond: number  | undefined) {
        this['traffic_per_second'] = trafficPerSecond;
    }
    public get trafficPerSecond(): number | undefined {
        return this['traffic_per_second'];
    }
    public withPacketPerSecond(packetPerSecond: number): ExtendDDoSSet {
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