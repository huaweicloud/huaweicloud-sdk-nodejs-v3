

export class PeerConnectionItem {
    public peerVpcId?: string;
    public peerSubnetId?: string;
    public defaultGateWay?: boolean;
    public constructor(peerVpcId?: string, peerSubnetId?: string) { 
        this['peerVpcId'] = peerVpcId;
        this['peerSubnetId'] = peerSubnetId;
    }
    public withPeerVpcId(peerVpcId: string): PeerConnectionItem {
        this['peerVpcId'] = peerVpcId;
        return this;
    }
    public withPeerSubnetId(peerSubnetId: string): PeerConnectionItem {
        this['peerSubnetId'] = peerSubnetId;
        return this;
    }
    public withDefaultGateWay(defaultGateWay: boolean): PeerConnectionItem {
        this['defaultGateWay'] = defaultGateWay;
        return this;
    }
}