import { AddTrustedIpAddressRequestBody } from './AddTrustedIpAddressRequestBody';


export class AddTrustedIpAddressRequest {
    public id?: number;
    public body?: AddTrustedIpAddressRequestBody;
    public constructor(id?: number) { 
        this['id'] = id;
    }
    public withId(id: number): AddTrustedIpAddressRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AddTrustedIpAddressRequestBody): AddTrustedIpAddressRequest {
        this['body'] = body;
        return this;
    }
}