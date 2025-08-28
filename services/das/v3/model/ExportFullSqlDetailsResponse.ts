import { FullSqlDetail } from './FullSqlDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportFullSqlDetailsResponse extends SdkResponse {
    private 'full_sql_details'?: Array<FullSqlDetail>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withFullSqlDetails(fullSqlDetails: Array<FullSqlDetail>): ExportFullSqlDetailsResponse {
        this['full_sql_details'] = fullSqlDetails;
        return this;
    }
    public set fullSqlDetails(fullSqlDetails: Array<FullSqlDetail>  | undefined) {
        this['full_sql_details'] = fullSqlDetails;
    }
    public get fullSqlDetails(): Array<FullSqlDetail> | undefined {
        return this['full_sql_details'];
    }
    public withTotal(total: number): ExportFullSqlDetailsResponse {
        this['total'] = total;
        return this;
    }
}