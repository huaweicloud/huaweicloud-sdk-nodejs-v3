

export class Connection {
    private 'connection_id'?: string;
    private 'client_virtual_ip'?: string;
    private 'client_ip'?: string;
    private 'client_user_name'?: string;
    private 'inbound_packets'?: number;
    private 'outbound_packets'?: number;
    private 'inbound_bytes'?: number;
    private 'outbound_bytes'?: number;
    private 'connection_established_time'?: Date;
    public timestamp?: Date;
    public constructor() { 
    }
    public withConnectionId(connectionId: string): Connection {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withClientVirtualIp(clientVirtualIp: string): Connection {
        this['client_virtual_ip'] = clientVirtualIp;
        return this;
    }
    public set clientVirtualIp(clientVirtualIp: string  | undefined) {
        this['client_virtual_ip'] = clientVirtualIp;
    }
    public get clientVirtualIp(): string | undefined {
        return this['client_virtual_ip'];
    }
    public withClientIp(clientIp: string): Connection {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withClientUserName(clientUserName: string): Connection {
        this['client_user_name'] = clientUserName;
        return this;
    }
    public set clientUserName(clientUserName: string  | undefined) {
        this['client_user_name'] = clientUserName;
    }
    public get clientUserName(): string | undefined {
        return this['client_user_name'];
    }
    public withInboundPackets(inboundPackets: number): Connection {
        this['inbound_packets'] = inboundPackets;
        return this;
    }
    public set inboundPackets(inboundPackets: number  | undefined) {
        this['inbound_packets'] = inboundPackets;
    }
    public get inboundPackets(): number | undefined {
        return this['inbound_packets'];
    }
    public withOutboundPackets(outboundPackets: number): Connection {
        this['outbound_packets'] = outboundPackets;
        return this;
    }
    public set outboundPackets(outboundPackets: number  | undefined) {
        this['outbound_packets'] = outboundPackets;
    }
    public get outboundPackets(): number | undefined {
        return this['outbound_packets'];
    }
    public withInboundBytes(inboundBytes: number): Connection {
        this['inbound_bytes'] = inboundBytes;
        return this;
    }
    public set inboundBytes(inboundBytes: number  | undefined) {
        this['inbound_bytes'] = inboundBytes;
    }
    public get inboundBytes(): number | undefined {
        return this['inbound_bytes'];
    }
    public withOutboundBytes(outboundBytes: number): Connection {
        this['outbound_bytes'] = outboundBytes;
        return this;
    }
    public set outboundBytes(outboundBytes: number  | undefined) {
        this['outbound_bytes'] = outboundBytes;
    }
    public get outboundBytes(): number | undefined {
        return this['outbound_bytes'];
    }
    public withConnectionEstablishedTime(connectionEstablishedTime: Date): Connection {
        this['connection_established_time'] = connectionEstablishedTime;
        return this;
    }
    public set connectionEstablishedTime(connectionEstablishedTime: Date  | undefined) {
        this['connection_established_time'] = connectionEstablishedTime;
    }
    public get connectionEstablishedTime(): Date | undefined {
        return this['connection_established_time'];
    }
    public withTimestamp(timestamp: Date): Connection {
        this['timestamp'] = timestamp;
        return this;
    }
}