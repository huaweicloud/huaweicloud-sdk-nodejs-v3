

export class DeleteVpcTagRequest {
    private 'vpc_id'?: string;
    public key?: string;
    public constructor(vpcId?: string, key?: string) { 
        this['vpc_id'] = vpcId;
        this['key'] = key;
    }
    public withVpcId(vpcId: string): DeleteVpcTagRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withKey(key: string): DeleteVpcTagRequest {
        this['key'] = key;
        return this;
    }
}