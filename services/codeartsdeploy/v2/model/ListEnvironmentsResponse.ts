import { EnvironmentDetail } from './EnvironmentDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnvironmentsResponse extends SdkResponse {
    public status?: string;
    public total?: number;
    public result?: Array<EnvironmentDetail>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ListEnvironmentsResponse {
        this['status'] = status;
        return this;
    }
    public withTotal(total: number): ListEnvironmentsResponse {
        this['total'] = total;
        return this;
    }
    public withResult(result: Array<EnvironmentDetail>): ListEnvironmentsResponse {
        this['result'] = result;
        return this;
    }
}