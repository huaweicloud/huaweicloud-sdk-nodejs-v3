import { UpdateAddressGroupRequestBody } from './UpdateAddressGroupRequestBody';


export class UpdateAddressGroupRequest {
    private 'address_group_id': string | undefined;
    public body?: UpdateAddressGroupRequestBody;
    public constructor(addressGroupId?: any) { 
        this['address_group_id'] = addressGroupId;
    }
    public withAddressGroupId(addressGroupId: string): UpdateAddressGroupRequest {
        this['address_group_id'] = addressGroupId;
        return this;
    }
    public set addressGroupId(addressGroupId: string | undefined) {
        this['address_group_id'] = addressGroupId;
    }
    public get addressGroupId() {
        return this['address_group_id'];
    }
    public withBody(body: UpdateAddressGroupRequestBody): UpdateAddressGroupRequest {
        this['body'] = body;
        return this;
    }
}