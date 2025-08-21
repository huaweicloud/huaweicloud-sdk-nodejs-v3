import { OrganizationAccountInfo } from './OrganizationAccountInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrganizationAccountsResponse extends SdkResponse {
    public data?: Array<OrganizationAccountInfo>;
    public marker?: string;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<OrganizationAccountInfo>): ListOrganizationAccountsResponse {
        this['data'] = data;
        return this;
    }
    public withMarker(marker: string): ListOrganizationAccountsResponse {
        this['marker'] = marker;
        return this;
    }
    public withTotal(total: number): ListOrganizationAccountsResponse {
        this['total'] = total;
        return this;
    }
}