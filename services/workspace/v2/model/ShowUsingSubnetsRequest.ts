

export class ShowUsingSubnetsRequest {
    private 'subnet_ids'?: string;
    public constructor() { 
    }
    public withSubnetIds(subnetIds: string): ShowUsingSubnetsRequest {
        this['subnet_ids'] = subnetIds;
        return this;
    }
    public set subnetIds(subnetIds: string  | undefined) {
        this['subnet_ids'] = subnetIds;
    }
    public get subnetIds(): string | undefined {
        return this['subnet_ids'];
    }
}