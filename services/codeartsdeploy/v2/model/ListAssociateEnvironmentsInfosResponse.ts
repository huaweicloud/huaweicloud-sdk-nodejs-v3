import { EnvironmentInfo } from './EnvironmentInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssociateEnvironmentsInfosResponse extends SdkResponse {
    public status?: string;
    public total?: number;
    public result?: Array<EnvironmentInfo>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListAssociateEnvironmentsInfosResponse {
        this['status'] = status;
        return this;
    }
    public withTotal(total: number): ListAssociateEnvironmentsInfosResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<EnvironmentInfo>): ListAssociateEnvironmentsInfosResponse {
        this['result'] = result;
        return this;
    }
}