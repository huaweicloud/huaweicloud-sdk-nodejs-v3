

export class UpdatePolicyRequestBody {
    public name?: string;
    public threshold?: number;
    public description?: string;
    public udp?: UpdatePolicyRequestBodyUdpEnum | string;
    public tcp?: UpdatePolicyRequestBodyTcpEnum | string;
    public icmp?: UpdatePolicyRequestBodyIcmpEnum | string;
    public other?: UpdatePolicyRequestBodyOtherEnum | string;
    private 'icmp_traffic_limiting'?: number;
    private 'udp_traffic_limiting'?: number;
    private 'udp_fragment_rate_limiting'?: number;
    private 'other_traffic_limiting'?: number;
    private 'tcp_traffic_limiting'?: number;
    private 'tcp_fragment_rate_limiting'?: number;
    public constructor() { 
    }
    public withName(name: string): UpdatePolicyRequestBody {
        this['name'] = name;
        return this;
    }
    public withThreshold(threshold: number): UpdatePolicyRequestBody {
        this['threshold'] = threshold;
        return this;
    }
    public withDescription(description: string): UpdatePolicyRequestBody {
        this['description'] = description;
        return this;
    }
    public withUdp(udp: UpdatePolicyRequestBodyUdpEnum | string): UpdatePolicyRequestBody {
        this['udp'] = udp;
        return this;
    }
    public withTcp(tcp: UpdatePolicyRequestBodyTcpEnum | string): UpdatePolicyRequestBody {
        this['tcp'] = tcp;
        return this;
    }
    public withIcmp(icmp: UpdatePolicyRequestBodyIcmpEnum | string): UpdatePolicyRequestBody {
        this['icmp'] = icmp;
        return this;
    }
    public withOther(other: UpdatePolicyRequestBodyOtherEnum | string): UpdatePolicyRequestBody {
        this['other'] = other;
        return this;
    }
    public withIcmpTrafficLimiting(icmpTrafficLimiting: number): UpdatePolicyRequestBody {
        this['icmp_traffic_limiting'] = icmpTrafficLimiting;
        return this;
    }
    public set icmpTrafficLimiting(icmpTrafficLimiting: number  | undefined) {
        this['icmp_traffic_limiting'] = icmpTrafficLimiting;
    }
    public get icmpTrafficLimiting(): number | undefined {
        return this['icmp_traffic_limiting'];
    }
    public withUdpTrafficLimiting(udpTrafficLimiting: number): UpdatePolicyRequestBody {
        this['udp_traffic_limiting'] = udpTrafficLimiting;
        return this;
    }
    public set udpTrafficLimiting(udpTrafficLimiting: number  | undefined) {
        this['udp_traffic_limiting'] = udpTrafficLimiting;
    }
    public get udpTrafficLimiting(): number | undefined {
        return this['udp_traffic_limiting'];
    }
    public withUdpFragmentRateLimiting(udpFragmentRateLimiting: number): UpdatePolicyRequestBody {
        this['udp_fragment_rate_limiting'] = udpFragmentRateLimiting;
        return this;
    }
    public set udpFragmentRateLimiting(udpFragmentRateLimiting: number  | undefined) {
        this['udp_fragment_rate_limiting'] = udpFragmentRateLimiting;
    }
    public get udpFragmentRateLimiting(): number | undefined {
        return this['udp_fragment_rate_limiting'];
    }
    public withOtherTrafficLimiting(otherTrafficLimiting: number): UpdatePolicyRequestBody {
        this['other_traffic_limiting'] = otherTrafficLimiting;
        return this;
    }
    public set otherTrafficLimiting(otherTrafficLimiting: number  | undefined) {
        this['other_traffic_limiting'] = otherTrafficLimiting;
    }
    public get otherTrafficLimiting(): number | undefined {
        return this['other_traffic_limiting'];
    }
    public withTcpTrafficLimiting(tcpTrafficLimiting: number): UpdatePolicyRequestBody {
        this['tcp_traffic_limiting'] = tcpTrafficLimiting;
        return this;
    }
    public set tcpTrafficLimiting(tcpTrafficLimiting: number  | undefined) {
        this['tcp_traffic_limiting'] = tcpTrafficLimiting;
    }
    public get tcpTrafficLimiting(): number | undefined {
        return this['tcp_traffic_limiting'];
    }
    public withTcpFragmentRateLimiting(tcpFragmentRateLimiting: number): UpdatePolicyRequestBody {
        this['tcp_fragment_rate_limiting'] = tcpFragmentRateLimiting;
        return this;
    }
    public set tcpFragmentRateLimiting(tcpFragmentRateLimiting: number  | undefined) {
        this['tcp_fragment_rate_limiting'] = tcpFragmentRateLimiting;
    }
    public get tcpFragmentRateLimiting(): number | undefined {
        return this['tcp_fragment_rate_limiting'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePolicyRequestBodyUdpEnum {
    BLOCK = 'block',
    UNBLOCK = 'unblock',
    LIMITING = 'limiting'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdatePolicyRequestBodyTcpEnum {
    BLOCK = 'block',
    UNBLOCK = 'unblock',
    LIMITING = 'limiting'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdatePolicyRequestBodyIcmpEnum {
    BLOCK = 'block',
    UNBLOCK = 'unblock',
    LIMITING = 'limiting'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdatePolicyRequestBodyOtherEnum {
    BLOCK = 'block',
    UNBLOCK = 'unblock',
    LIMITING = 'limiting'
}
