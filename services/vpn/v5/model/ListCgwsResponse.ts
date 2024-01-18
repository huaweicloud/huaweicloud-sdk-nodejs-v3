import { PageInfo } from './PageInfo';
import { ResponseCustomerGateway } from './ResponseCustomerGateway';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCgwsResponse extends SdkResponse {
    private 'customer_gateways'?: Array<ResponseCustomerGateway>;
    private 'total_count'?: number;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withCustomerGateways(customerGateways: Array<ResponseCustomerGateway>): ListCgwsResponse {
        this['customer_gateways'] = customerGateways;
        return this;
    }
    public set customerGateways(customerGateways: Array<ResponseCustomerGateway>  | undefined) {
        this['customer_gateways'] = customerGateways;
    }
    public get customerGateways(): Array<ResponseCustomerGateway> | undefined {
        return this['customer_gateways'];
    }
    public withTotalCount(totalCount: number): ListCgwsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withPageInfo(pageInfo: PageInfo): ListCgwsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListCgwsResponse {
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