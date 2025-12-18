import { CheckRdsConnectionResqVO } from './CheckRdsConnectionResqVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckDataNodeConnectionV0V3Response extends SdkResponse {
    private 'rds_check_infos'?: Array<CheckRdsConnectionResqVO>;
    public constructor() { 
        super();
    }
    public withRdsCheckInfos(rdsCheckInfos: Array<CheckRdsConnectionResqVO>): CheckDataNodeConnectionV0V3Response {
        this['rds_check_infos'] = rdsCheckInfos;
        return this;
    }
    public set rdsCheckInfos(rdsCheckInfos: Array<CheckRdsConnectionResqVO>  | undefined) {
        this['rds_check_infos'] = rdsCheckInfos;
    }
    public get rdsCheckInfos(): Array<CheckRdsConnectionResqVO> | undefined {
        return this['rds_check_infos'];
    }
}