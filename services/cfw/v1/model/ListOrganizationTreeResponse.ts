import { OrganizationAccountInfo } from './OrganizationAccountInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrganizationTreeResponse extends SdkResponse {
    public data?: Array<OrganizationAccountInfo>;
    public marker?: string;
    public total?: number;
    public constructor() { 
        super();
    }
    public withData(data: Array<OrganizationAccountInfo>): ListOrganizationTreeResponse {
        this['data'] = data;
        return this;
    }
    public withMarker(marker: string): ListOrganizationTreeResponse {
        this['marker'] = marker;
        return this;
    }
    public withTotal(total: number): ListOrganizationTreeResponse {
        this['total'] = total;
        return this;
    }
}