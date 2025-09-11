import { OperateLogInfo } from './OperateLogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditOperateLogsNewResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'operate_log'?: Array<OperateLogInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAuditOperateLogsNewResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withOperateLog(operateLog: Array<OperateLogInfo>): ListAuditOperateLogsNewResponse {
        this['operate_log'] = operateLog;
        return this;
    }
    public set operateLog(operateLog: Array<OperateLogInfo>  | undefined) {
        this['operate_log'] = operateLog;
    }
    public get operateLog(): Array<OperateLogInfo> | undefined {
        return this['operate_log'];
    }
}