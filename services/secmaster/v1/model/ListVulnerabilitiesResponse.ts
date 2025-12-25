import { VulnerabilityDetail } from './VulnerabilityDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVulnerabilitiesResponse extends SdkResponse {
    public code?: string;
    public message?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public success?: boolean;
    public data?: Array<VulnerabilityDetail>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListVulnerabilitiesResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ListVulnerabilitiesResponse {
        this['message'] = message;
        return this;
    }
    public withTotal(total: number): ListVulnerabilitiesResponse {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ListVulnerabilitiesResponse {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ListVulnerabilitiesResponse {
        this['page'] = page;
        return this;
    }
    public withSuccess(success: boolean): ListVulnerabilitiesResponse {
        this['success'] = success;
        return this;
    }
    public withData(data: Array<VulnerabilityDetail>): ListVulnerabilitiesResponse {
        this['data'] = data;
        return this;
    }
}