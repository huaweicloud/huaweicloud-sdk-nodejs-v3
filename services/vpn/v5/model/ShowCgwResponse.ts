import { ResponseCustomerGateway } from './ResponseCustomerGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCgwResponse extends SdkResponse {
    private 'customer_gateway'?: ResponseCustomerGateway;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCustomerGateway(customerGateway: ResponseCustomerGateway): ShowCgwResponse {
        this['customer_gateway'] = customerGateway;
        return this;
    }
    public set customerGateway(customerGateway: ResponseCustomerGateway  | undefined) {
        this['customer_gateway'] = customerGateway;
    }
    public get customerGateway(): ResponseCustomerGateway | undefined {
        return this['customer_gateway'];
    }
    public withRequestId(requestId: string): ShowCgwResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}