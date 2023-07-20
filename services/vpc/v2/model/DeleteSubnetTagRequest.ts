

export class DeleteSubnetTagRequest {
    private 'subnet_id'?: string;
    public key?: string;
    public constructor(subnetId?: string, key?: string) { 
        this['subnet_id'] = subnetId;
        this['key'] = key;
    }
    public withSubnetId(subnetId: string): DeleteSubnetTagRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withKey(key: string): DeleteSubnetTagRequest {
        this['key'] = key;
        return this;
    }
}