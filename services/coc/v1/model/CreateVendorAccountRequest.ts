import { VendorAccountCreateRequest } from './VendorAccountCreateRequest';


export class CreateVendorAccountRequest {
    public body?: VendorAccountCreateRequest;
    public constructor() { 
    }
    public withBody(body: VendorAccountCreateRequest): CreateVendorAccountRequest {
        this['body'] = body;
        return this;
    }
}