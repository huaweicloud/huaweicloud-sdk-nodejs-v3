

export class ShowOpLogRequest {
    private 'operation_log_id': string | undefined;
    public constructor(operationLogId?: any) { 
        this['operation_log_id'] = operationLogId;
    }
    public withOperationLogId(operationLogId: string): ShowOpLogRequest {
        this['operation_log_id'] = operationLogId;
        return this;
    }
    public set operationLogId(operationLogId: string | undefined) {
        this['operation_log_id'] = operationLogId;
    }
    public get operationLogId() {
        return this['operation_log_id'];
    }
}