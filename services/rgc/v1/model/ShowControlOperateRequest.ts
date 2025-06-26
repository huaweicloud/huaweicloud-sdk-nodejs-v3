

export class ShowControlOperateRequest {
    private 'operation_control_status_id'?: string;
    public constructor(operationControlStatusId?: string) { 
        this['operation_control_status_id'] = operationControlStatusId;
    }
    public withOperationControlStatusId(operationControlStatusId: string): ShowControlOperateRequest {
        this['operation_control_status_id'] = operationControlStatusId;
        return this;
    }
    public set operationControlStatusId(operationControlStatusId: string  | undefined) {
        this['operation_control_status_id'] = operationControlStatusId;
    }
    public get operationControlStatusId(): string | undefined {
        return this['operation_control_status_id'];
    }
}