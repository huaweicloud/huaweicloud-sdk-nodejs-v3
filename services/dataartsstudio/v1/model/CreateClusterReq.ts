

export class CreateClusterReq {
    private 'cluster_name'?: string;
    public description?: string;
    private 'flavor_id'?: string;
    private 'charge_mode'?: number;
    private 'cidr_in_vpc'?: string;
    public workspaces?: Array<string>;
    public constructor(clusterName?: string, flavorId?: string, chargeMode?: number) { 
        this['cluster_name'] = clusterName;
        this['flavor_id'] = flavorId;
        this['charge_mode'] = chargeMode;
    }
    public withClusterName(clusterName: string): CreateClusterReq {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDescription(description: string): CreateClusterReq {
        this['description'] = description;
        return this;
    }
    public withFlavorId(flavorId: string): CreateClusterReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withChargeMode(chargeMode: number): CreateClusterReq {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: number  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): number | undefined {
        return this['charge_mode'];
    }
    public withCidrInVpc(cidrInVpc: string): CreateClusterReq {
        this['cidr_in_vpc'] = cidrInVpc;
        return this;
    }
    public set cidrInVpc(cidrInVpc: string  | undefined) {
        this['cidr_in_vpc'] = cidrInVpc;
    }
    public get cidrInVpc(): string | undefined {
        return this['cidr_in_vpc'];
    }
    public withWorkspaces(workspaces: Array<string>): CreateClusterReq {
        this['workspaces'] = workspaces;
        return this;
    }
}