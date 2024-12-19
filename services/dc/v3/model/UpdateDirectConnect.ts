

export class UpdateDirectConnect {
    public name?: string;
    public description?: string;
    public bandwidth?: number;
    private 'peer_location'?: string;
    public status?: UpdateDirectConnectStatusEnum | string;
    private 'provider_status'?: UpdateDirectConnectProviderStatusEnum | string;
    public constructor() { 
    }
    public withName(name: string): UpdateDirectConnect {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateDirectConnect {
        this['description'] = description;
        return this;
    }
    public withBandwidth(bandwidth: number): UpdateDirectConnect {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withPeerLocation(peerLocation: string): UpdateDirectConnect {
        this['peer_location'] = peerLocation;
        return this;
    }
    public set peerLocation(peerLocation: string  | undefined) {
        this['peer_location'] = peerLocation;
    }
    public get peerLocation(): string | undefined {
        return this['peer_location'];
    }
    public withStatus(status: UpdateDirectConnectStatusEnum | string): UpdateDirectConnect {
        this['status'] = status;
        return this;
    }
    public withProviderStatus(providerStatus: UpdateDirectConnectProviderStatusEnum | string): UpdateDirectConnect {
        this['provider_status'] = providerStatus;
        return this;
    }
    public set providerStatus(providerStatus: UpdateDirectConnectProviderStatusEnum | string  | undefined) {
        this['provider_status'] = providerStatus;
    }
    public get providerStatus(): UpdateDirectConnectProviderStatusEnum | string | undefined {
        return this['provider_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDirectConnectStatusEnum {
    PENDING_PAY = 'PENDING_PAY',
    APPLY = 'APPLY'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateDirectConnectProviderStatusEnum {
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN'
}
