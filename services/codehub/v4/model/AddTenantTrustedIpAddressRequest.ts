import { AddTrustedIpAddressRequestBody } from './AddTrustedIpAddressRequestBody';


export class AddTenantTrustedIpAddressRequest {
    public body?: AddTrustedIpAddressRequestBody;
    public constructor() { 
    }
    public withBody(body: AddTrustedIpAddressRequestBody): AddTenantTrustedIpAddressRequest {
        this['body'] = body;
        return this;
    }
}