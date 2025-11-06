import { AddTrustedIpAddressRequestBody } from './AddTrustedIpAddressRequestBody';


export class UpdateTenantTrustedIpAddressRequest {
    private 'ip_id'?: number;
    public body?: AddTrustedIpAddressRequestBody;
    public constructor(ipId?: number) { 
        this['ip_id'] = ipId;
    }
    public withIpId(ipId: number): UpdateTenantTrustedIpAddressRequest {
        this['ip_id'] = ipId;
        return this;
    }
    public set ipId(ipId: number  | undefined) {
        this['ip_id'] = ipId;
    }
    public get ipId(): number | undefined {
        return this['ip_id'];
    }
    public withBody(body: AddTrustedIpAddressRequestBody): UpdateTenantTrustedIpAddressRequest {
        this['body'] = body;
        return this;
    }
}