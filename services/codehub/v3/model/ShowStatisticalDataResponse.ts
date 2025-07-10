import { RepositoryStatisticsVO } from './RepositoryStatisticsVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatisticalDataResponse extends SdkResponse {
    public error?: Error;
    public result?: RepositoryStatisticsVO;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ShowStatisticalDataResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: RepositoryStatisticsVO): ShowStatisticalDataResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ShowStatisticalDataResponse {
        this['status'] = status;
        return this;
    }
}