

export class ControlOperation {
    private 'operation_control_status_id'?: string;
    private 'operation_type'?: string;
    public status?: string;
    public message?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withOperationControlStatusId(operationControlStatusId: string): ControlOperation {
        this['operation_control_status_id'] = operationControlStatusId;
        return this;
    }
    public set operationControlStatusId(operationControlStatusId: string  | undefined) {
        this['operation_control_status_id'] = operationControlStatusId;
    }
    public get operationControlStatusId(): string | undefined {
        return this['operation_control_status_id'];
    }
    public withOperationType(operationType: string): ControlOperation {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withStatus(status: string): ControlOperation {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ControlOperation {
        this['message'] = message;
        return this;
    }
    public withStartTime(startTime: string): ControlOperation {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ControlOperation {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}