

export class CreateHostedDirectConnect {
    public name?: string;
    public description?: string;
    public bandwidth?: number;
    private 'hosting_id'?: string;
    public vlan?: number;
    private 'resource_tenant_id'?: string;
    private 'peer_location'?: string;
    public constructor(hostingId?: string, vlan?: number, resourceTenantId?: string) { 
        this['hosting_id'] = hostingId;
        this['vlan'] = vlan;
        this['resource_tenant_id'] = resourceTenantId;
    }
    public withName(name: string): CreateHostedDirectConnect {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateHostedDirectConnect {
        this['description'] = description;
        return this;
    }
    public withBandwidth(bandwidth: number): CreateHostedDirectConnect {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withHostingId(hostingId: string): CreateHostedDirectConnect {
        this['hosting_id'] = hostingId;
        return this;
    }
    public set hostingId(hostingId: string  | undefined) {
        this['hosting_id'] = hostingId;
    }
    public get hostingId(): string | undefined {
        return this['hosting_id'];
    }
    public withVlan(vlan: number): CreateHostedDirectConnect {
        this['vlan'] = vlan;
        return this;
    }
    public withResourceTenantId(resourceTenantId: string): CreateHostedDirectConnect {
        this['resource_tenant_id'] = resourceTenantId;
        return this;
    }
    public set resourceTenantId(resourceTenantId: string  | undefined) {
        this['resource_tenant_id'] = resourceTenantId;
    }
    public get resourceTenantId(): string | undefined {
        return this['resource_tenant_id'];
    }
    public withPeerLocation(peerLocation: string): CreateHostedDirectConnect {
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