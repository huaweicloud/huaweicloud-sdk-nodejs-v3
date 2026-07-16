

export class PeerConnectionStatus {
    public peerVpcId?: string;
    public peerSubnetId?: string;
    public defaultGateWay?: boolean;
    public phase?: string;
    public constructor(peerVpcId?: string, peerSubnetId?: string) { 
        this['peerVpcId'] = peerVpcId;
        this['peerSubnetId'] = peerSubnetId;
    }
    public withPeerVpcId(peerVpcId: string): PeerConnectionStatus {
        this['peerVpcId'] = peerVpcId;
        return this;
    }
    public withPeerSubnetId(peerSubnetId: string): PeerConnectionStatus {
        this['peerSubnetId'] = peerSubnetId;
        return this;
    }
    public withDefaultGateWay(defaultGateWay: boolean): PeerConnectionStatus {
        this['defaultGateWay'] = defaultGateWay;
        return this;
    }
    public withPhase(phase: string): PeerConnectionStatus {
        this['phase'] = phase;
        return this;
    }
}