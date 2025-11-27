

export class StackInstanceStatusMessagePrimitiveTypeHolder {
    private 'status_message'?: string;
    public constructor() { 
    }
    public withStatusMessage(statusMessage: string): StackInstanceStatusMessagePrimitiveTypeHolder {
        this['status_message'] = statusMessage;
        return this;
    }
    public set statusMessage(statusMessage: string  | undefined) {
        this['status_message'] = statusMessage;
    }
    public get statusMessage(): string | undefined {
        return this['status_message'];
    }
}