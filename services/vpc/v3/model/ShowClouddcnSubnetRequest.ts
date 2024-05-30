

export class ShowClouddcnSubnetRequest {
    private 'clouddcn_subnet_id'?: string;
    public constructor(clouddcnSubnetId?: string) { 
        this['clouddcn_subnet_id'] = clouddcnSubnetId;
    }
    public withClouddcnSubnetId(clouddcnSubnetId: string): ShowClouddcnSubnetRequest {
        this['clouddcn_subnet_id'] = clouddcnSubnetId;
        return this;
    }
    public set clouddcnSubnetId(clouddcnSubnetId: string  | undefined) {
        this['clouddcn_subnet_id'] = clouddcnSubnetId;
    }
    public get clouddcnSubnetId(): string | undefined {
        return this['clouddcn_subnet_id'];
    }
}