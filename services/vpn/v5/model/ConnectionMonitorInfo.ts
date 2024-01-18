

export class ConnectionMonitorInfo {
    public id?: string;
    public status?: string;
    private 'vpn_connection_id'?: string;
    public type?: string;
    private 'source_ip'?: string;
    private 'destination_ip'?: string;
    private 'proto_type'?: string;
    public constructor() { 
    }
    public withId(id: string): ConnectionMonitorInfo {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): ConnectionMonitorInfo {
        this['status'] = status;
        return this;
    }
    public withVpnConnectionId(vpnConnectionId: string): ConnectionMonitorInfo {
        this['vpn_connection_id'] = vpnConnectionId;
        return this;
    }
    public set vpnConnectionId(vpnConnectionId: string  | undefined) {
        this['vpn_connection_id'] = vpnConnectionId;
    }
    public get vpnConnectionId(): string | undefined {
        return this['vpn_connection_id'];
    }
    public withType(type: string): ConnectionMonitorInfo {
        this['type'] = type;
        return this;
    }
    public withSourceIp(sourceIp: string): ConnectionMonitorInfo {
        this['source_ip'] = sourceIp;
        return this;
    }
    public set sourceIp(sourceIp: string  | undefined) {
        this['source_ip'] = sourceIp;
    }
    public get sourceIp(): string | undefined {
        return this['source_ip'];
    }
    public withDestinationIp(destinationIp: string): ConnectionMonitorInfo {
        this['destination_ip'] = destinationIp;
        return this;
    }
    public set destinationIp(destinationIp: string  | undefined) {
        this['destination_ip'] = destinationIp;
    }
    public get destinationIp(): string | undefined {
        return this['destination_ip'];
    }
    public withProtoType(protoType: string): ConnectionMonitorInfo {
        this['proto_type'] = protoType;
        return this;
    }
    public set protoType(protoType: string  | undefined) {
        this['proto_type'] = protoType;
    }
    public get protoType(): string | undefined {
        return this['proto_type'];
    }
}