

export class BgpPeer {
    private 'peer_ip_address'?: string;
    private 'peer_asn'?: number;
    public state?: string;
    private 'state_duration'?: string;
    private 'num_received_routes'?: number;
    private 'num_message_received'?: number;
    private 'num_message_sent'?: number;
    public constructor() { 
    }
    public withPeerIpAddress(peerIpAddress: string): BgpPeer {
        this['peer_ip_address'] = peerIpAddress;
        return this;
    }
    public set peerIpAddress(peerIpAddress: string  | undefined) {
        this['peer_ip_address'] = peerIpAddress;
    }
    public get peerIpAddress(): string | undefined {
        return this['peer_ip_address'];
    }
    public withPeerAsn(peerAsn: number): BgpPeer {
        this['peer_asn'] = peerAsn;
        return this;
    }
    public set peerAsn(peerAsn: number  | undefined) {
        this['peer_asn'] = peerAsn;
    }
    public get peerAsn(): number | undefined {
        return this['peer_asn'];
    }
    public withState(state: string): BgpPeer {
        this['state'] = state;
        return this;
    }
    public withStateDuration(stateDuration: string): BgpPeer {
        this['state_duration'] = stateDuration;
        return this;
    }
    public set stateDuration(stateDuration: string  | undefined) {
        this['state_duration'] = stateDuration;
    }
    public get stateDuration(): string | undefined {
        return this['state_duration'];
    }
    public withNumReceivedRoutes(numReceivedRoutes: number): BgpPeer {
        this['num_received_routes'] = numReceivedRoutes;
        return this;
    }
    public set numReceivedRoutes(numReceivedRoutes: number  | undefined) {
        this['num_received_routes'] = numReceivedRoutes;
    }
    public get numReceivedRoutes(): number | undefined {
        return this['num_received_routes'];
    }
    public withNumMessageReceived(numMessageReceived: number): BgpPeer {
        this['num_message_received'] = numMessageReceived;
        return this;
    }
    public set numMessageReceived(numMessageReceived: number  | undefined) {
        this['num_message_received'] = numMessageReceived;
    }
    public get numMessageReceived(): number | undefined {
        return this['num_message_received'];
    }
    public withNumMessageSent(numMessageSent: number): BgpPeer {
        this['num_message_sent'] = numMessageSent;
        return this;
    }
    public set numMessageSent(numMessageSent: number  | undefined) {
        this['num_message_sent'] = numMessageSent;
    }
    public get numMessageSent(): number | undefined {
        return this['num_message_sent'];
    }
}