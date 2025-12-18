import { ApplyHistory } from './ApplyHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListParameterGroupApplyHistoryV0V3Response extends SdkResponse {
    private 'rds_check_infos'?: Array<ApplyHistory>;
    public constructor() { 
        super();
    }
    public withRdsCheckInfos(rdsCheckInfos: Array<ApplyHistory>): ListParameterGroupApplyHistoryV0V3Response {
        this['rds_check_infos'] = rdsCheckInfos;
        return this;
    }
    public set rdsCheckInfos(rdsCheckInfos: Array<ApplyHistory>  | undefined) {
        this['rds_check_infos'] = rdsCheckInfos;
    }
    public get rdsCheckInfos(): Array<ApplyHistory> | undefined {
        return this['rds_check_infos'];
    }
}