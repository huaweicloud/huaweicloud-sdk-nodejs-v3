import { VendorAccountUpdateRequest } from './VendorAccountUpdateRequest';


export class UpdateVendorAccountRequest {
    public id?: string;
    public body?: VendorAccountUpdateRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateVendorAccountRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: VendorAccountUpdateRequest): UpdateVendorAccountRequest {
        this['body'] = body;
        return this;
    }
}