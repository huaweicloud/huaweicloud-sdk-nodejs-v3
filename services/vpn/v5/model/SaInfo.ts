

export class SaInfo {
    public id?: string;
    private 'source_ip_cidr'?: string;
    private 'dest_ip_cidr'?: string;
    private 'packets_sent'?: number;
    private 'packets_recv'?: number;
    private 'traffic_sent'?: number;
    private 'traffic_recv'?: number;
    private 'collected_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): SaInfo {
        this['id'] = id;
        return this;
    }
    public withSourceIpCidr(sourceIpCidr: string): SaInfo {
        this['source_ip_cidr'] = sourceIpCidr;
        return this;
    }
    public set sourceIpCidr(sourceIpCidr: string  | undefined) {
        this['source_ip_cidr'] = sourceIpCidr;
    }
    public get sourceIpCidr(): string | undefined {
        return this['source_ip_cidr'];
    }
    public withDestIpCidr(destIpCidr: string): SaInfo {
        this['dest_ip_cidr'] = destIpCidr;
        return this;
    }
    public set destIpCidr(destIpCidr: string  | undefined) {
        this['dest_ip_cidr'] = destIpCidr;
    }
    public get destIpCidr(): string | undefined {
        return this['dest_ip_cidr'];
    }
    public withPacketsSent(packetsSent: number): SaInfo {
        this['packets_sent'] = packetsSent;
        return this;
    }
    public set packetsSent(packetsSent: number  | undefined) {
        this['packets_sent'] = packetsSent;
    }
    public get packetsSent(): number | undefined {
        return this['packets_sent'];
    }
    public withPacketsRecv(packetsRecv: number): SaInfo {
        this['packets_recv'] = packetsRecv;
        return this;
    }
    public set packetsRecv(packetsRecv: number  | undefined) {
        this['packets_recv'] = packetsRecv;
    }
    public get packetsRecv(): number | undefined {
        return this['packets_recv'];
    }
    public withTrafficSent(trafficSent: number): SaInfo {
        this['traffic_sent'] = trafficSent;
        return this;
    }
    public set trafficSent(trafficSent: number  | undefined) {
        this['traffic_sent'] = trafficSent;
    }
    public get trafficSent(): number | undefined {
        return this['traffic_sent'];
    }
    public withTrafficRecv(trafficRecv: number): SaInfo {
        this['traffic_recv'] = trafficRecv;
        return this;
    }
    public set trafficRecv(trafficRecv: number  | undefined) {
        this['traffic_recv'] = trafficRecv;
    }
    public get trafficRecv(): number | undefined {
        return this['traffic_recv'];
    }
    public withCollectedAt(collectedAt: Date): SaInfo {
        this['collected_at'] = collectedAt;
        return this;
    }
    public set collectedAt(collectedAt: Date  | undefined) {
        this['collected_at'] = collectedAt;
    }
    public get collectedAt(): Date | undefined {
        return this['collected_at'];
    }
}