import { ApiError } from './ApiError';
import { ResultValueRequirementsOverviewVo } from './ResultValueRequirementsOverviewVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRequirementsOverviewResponse extends SdkResponse {
    public status?: string;
    public result?: ResultValueRequirementsOverviewVo;
    public error?: ApiError;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowRequirementsOverviewResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: ResultValueRequirementsOverviewVo): ShowRequirementsOverviewResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: ApiError): ShowRequirementsOverviewResponse {
        this['error'] = error;
        return this;
    }
}