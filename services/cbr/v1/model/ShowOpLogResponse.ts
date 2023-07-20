import { OperationLog } from './OperationLog';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOpLogResponse extends SdkResponse {
    private 'operation_log'?: OperationLog;
    public constructor() { 
        super();
    }
    public withOperationLog(operationLog: OperationLog): ShowOpLogResponse {
        this['operation_log'] = operationLog;
        return this;
    }
    public set operationLog(operationLog: OperationLog  | undefined) {
        this['operation_log'] = operationLog;
    }
    public get operationLog(): OperationLog | undefined {
        return this['operation_log'];
    }
}