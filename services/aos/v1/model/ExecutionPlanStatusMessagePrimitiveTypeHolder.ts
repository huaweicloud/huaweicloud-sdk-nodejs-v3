

export class ExecutionPlanStatusMessagePrimitiveTypeHolder {
    private 'status_message'?: string | undefined;
    public constructor() { 
    }
    public withStatusMessage(statusMessage: string): ExecutionPlanStatusMessagePrimitiveTypeHolder {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage() {
        return this['status_message'];
    }
}