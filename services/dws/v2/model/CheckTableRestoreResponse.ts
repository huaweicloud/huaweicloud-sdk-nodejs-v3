import { CheckTableNameResult } from './CheckTableNameResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckTableRestoreResponse extends SdkResponse {
    private 'check_table_name_result'?: CheckTableNameResult;
    public constructor() { 
        super();
    }
    public withCheckTableNameResult(checkTableNameResult: CheckTableNameResult): CheckTableRestoreResponse {
        this['check_table_name_result'] = checkTableNameResult;
        return this;
    }
    public set checkTableNameResult(checkTableNameResult: CheckTableNameResult  | undefined) {
        this['check_table_name_result'] = checkTableNameResult;
    }
    public get checkTableNameResult(): CheckTableNameResult | undefined {
        return this['check_table_name_result'];
    }
}