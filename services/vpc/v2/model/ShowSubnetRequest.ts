

export class ShowSubnetRequest {
    private 'subnet_id': string | undefined;
    public constructor(subnetId?: any) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): ShowSubnetRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
}