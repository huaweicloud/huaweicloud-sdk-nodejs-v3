import { ResponseCustomerGateway } from './ResponseCustomerGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCgwResponse extends SdkResponse {
    private 'customer_gateway'?: ResponseCustomerGateway;
    private 'request_id'?: string;
    private 'header-response-token'?: string;
    public constructor() { 
        super();
    }
    public withCustomerGateway(customerGateway: ResponseCustomerGateway): CreateCgwResponse {
        this['customer_gateway'] = customerGateway;
        return this;
    }
    public set customerGateway(customerGateway: ResponseCustomerGateway  | undefined) {
        this['customer_gateway'] = customerGateway;
    }
    public get customerGateway(): ResponseCustomerGateway | undefined {
        return this['customer_gateway'];
    }
    public withRequestId(requestId: string): CreateCgwResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHeaderResponseToken(headerResponseToken: string): CreateCgwResponse {
        this['header-response-token'] = headerResponseToken;
        return this;
    }
    public set headerResponseToken(headerResponseToken: string  | undefined) {
        this['header-response-token'] = headerResponseToken;
    }
    public get headerResponseToken(): string | undefined {
        return this['header-response-token'];
    }
}