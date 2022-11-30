

export class ShowVpcTagsRequest {
    private 'vpc_id': string | undefined;
    public constructor(vpcId?: any) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): ShowVpcTagsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
}