

export class DeleteAddressGroupRequest {
    private 'address_group_id': string | undefined;
    public constructor(addressGroupId?: any) { 
        this['address_group_id'] = addressGroupId;
    }
    public withAddressGroupId(addressGroupId: string): DeleteAddressGroupRequest {
        this['address_group_id'] = addressGroupId;
        return this;
    }
    public set addressGroupId(addressGroupId: string | undefined) {
        this['address_group_id'] = addressGroupId;
    }
    public get addressGroupId() {
        return this['address_group_id'];
    }
}