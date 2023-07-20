

export class DeleteIpAddressGroupForceRequest {
    private 'address_group_id'?: string;
    public constructor(addressGroupId?: string) { 
        this['address_group_id'] = addressGroupId;
    }
    public withAddressGroupId(addressGroupId: string): DeleteIpAddressGroupForceRequest {
        this['address_group_id'] = addressGroupId;
        return this;
    }
    public set addressGroupId(addressGroupId: string  | undefined) {
        this['address_group_id'] = addressGroupId;
    }
    public get addressGroupId(): string | undefined {
        return this['address_group_id'];
    }
}