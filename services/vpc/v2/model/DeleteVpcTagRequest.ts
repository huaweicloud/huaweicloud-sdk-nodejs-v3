

export class DeleteVpcTagRequest {
    private 'vpc_id': string | undefined;
    public key: string;
    public constructor(vpcId?: any, key?: any) { 
        this['vpc_id'] = vpcId;
        this['key'] = key;
    }
    public withVpcId(vpcId: string): DeleteVpcTagRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withKey(key: string): DeleteVpcTagRequest {
        this['key'] = key;
        return this;
    }
}