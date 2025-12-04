

export class ConnectInfoAccessInfo {
    private 'access_ip'?: string;
    private 'intranet_ip'?: string;
    private 'access_ipv6'?: string;
    private 'access_port'?: number;
    private 'session_id'?: string;
    public timestamp?: string;
    public ticket?: string;
    public constructor() { 
    }
    public withAccessIp(accessIp: string): ConnectInfoAccessInfo {
        this['access_ip'] = accessIp;
        return this;
    }
    public set accessIp(accessIp: string  | undefined) {
        this['access_ip'] = accessIp;
    }
    public get accessIp(): string | undefined {
        return this['access_ip'];
    }
    public withIntranetIp(intranetIp: string): ConnectInfoAccessInfo {
        this['intranet_ip'] = intranetIp;
        return this;
    }
    public set intranetIp(intranetIp: string  | undefined) {
        this['intranet_ip'] = intranetIp;
    }
    public get intranetIp(): string | undefined {
        return this['intranet_ip'];
    }
    public withAccessIpv6(accessIpv6: string): ConnectInfoAccessInfo {
        this['access_ipv6'] = accessIpv6;
        return this;
    }
    public set accessIpv6(accessIpv6: string  | undefined) {
        this['access_ipv6'] = accessIpv6;
    }
    public get accessIpv6(): string | undefined {
        return this['access_ipv6'];
    }
    public withAccessPort(accessPort: number): ConnectInfoAccessInfo {
        this['access_port'] = accessPort;
        return this;
    }
    public set accessPort(accessPort: number  | undefined) {
        this['access_port'] = accessPort;
    }
    public get accessPort(): number | undefined {
        return this['access_port'];
    }
    public withSessionId(sessionId: string): ConnectInfoAccessInfo {
        this['session_id'] = sessionId;
        return this;
    }
    public set sessionId(sessionId: string  | undefined) {
        this['session_id'] = sessionId;
    }
    public get sessionId(): string | undefined {
        return this['session_id'];
    }
    public withTimestamp(timestamp: string): ConnectInfoAccessInfo {
        this['timestamp'] = timestamp;
        return this;
    }
    public withTicket(ticket: string): ConnectInfoAccessInfo {
        this['ticket'] = ticket;
        return this;
    }
}