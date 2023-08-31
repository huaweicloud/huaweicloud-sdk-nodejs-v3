

export class SessionConfiguration {
    private 'tcp_session_expire_time'?: number;
    private 'udp_session_expire_time'?: number;
    private 'icmp_session_expire_time'?: number;
    private 'tcp_time_wait_time'?: number;
    public constructor() { 
    }
    public withTcpSessionExpireTime(tcpSessionExpireTime: number): SessionConfiguration {
        this['tcp_session_expire_time'] = tcpSessionExpireTime;
        return this;
    }
    public set tcpSessionExpireTime(tcpSessionExpireTime: number  | undefined) {
        this['tcp_session_expire_time'] = tcpSessionExpireTime;
    }
    public get tcpSessionExpireTime(): number | undefined {
        return this['tcp_session_expire_time'];
    }
    public withUdpSessionExpireTime(udpSessionExpireTime: number): SessionConfiguration {
        this['udp_session_expire_time'] = udpSessionExpireTime;
        return this;
    }
    public set udpSessionExpireTime(udpSessionExpireTime: number  | undefined) {
        this['udp_session_expire_time'] = udpSessionExpireTime;
    }
    public get udpSessionExpireTime(): number | undefined {
        return this['udp_session_expire_time'];
    }
    public withIcmpSessionExpireTime(icmpSessionExpireTime: number): SessionConfiguration {
        this['icmp_session_expire_time'] = icmpSessionExpireTime;
        return this;
    }
    public set icmpSessionExpireTime(icmpSessionExpireTime: number  | undefined) {
        this['icmp_session_expire_time'] = icmpSessionExpireTime;
    }
    public get icmpSessionExpireTime(): number | undefined {
        return this['icmp_session_expire_time'];
    }
    public withTcpTimeWaitTime(tcpTimeWaitTime: number): SessionConfiguration {
        this['tcp_time_wait_time'] = tcpTimeWaitTime;
        return this;
    }
    public set tcpTimeWaitTime(tcpTimeWaitTime: number  | undefined) {
        this['tcp_time_wait_time'] = tcpTimeWaitTime;
    }
    public get tcpTimeWaitTime(): number | undefined {
        return this['tcp_time_wait_time'];
    }
}