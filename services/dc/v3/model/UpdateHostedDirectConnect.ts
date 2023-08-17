

export class UpdateHostedDirectConnect {
    public name?: string;
    public description?: string;
    public bandwidth?: number;
    private 'peer_location'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateHostedDirectConnect {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateHostedDirectConnect {
        this['description'] = description;
        return this;
    }
    public withBandwidth(bandwidth: number): UpdateHostedDirectConnect {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withPeerLocation(peerLocation: string): UpdateHostedDirectConnect {
        this['peer_location'] = peerLocation;
        return this;
    }
    public set peerLocation(peerLocation: string  | undefined) {
        this['peer_location'] = peerLocation;
    }
    public get peerLocation(): string | undefined {
        return this['peer_location'];
    }
}