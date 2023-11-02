

export class Operations {
    public operation?: string;
    private 'is_support'?: boolean;
    private 'cause_id'?: string;
    public constructor() { 
    }
    public withOperation(operation: string): Operations {
        this['operation'] = operation;
        return this;
    }
    public withIsSupport(isSupport: boolean): Operations {
        this['is_support'] = isSupport;
        return this;
    }
    public set isSupport(isSupport: boolean  | undefined) {
        this['is_support'] = isSupport;
    }
    public get isSupport(): boolean | undefined {
        return this['is_support'];
    }
    public withCauseId(causeId: string): Operations {
        this['cause_id'] = causeId;
        return this;
    }
    public set causeId(causeId: string  | undefined) {
        this['cause_id'] = causeId;
    }
    public get causeId(): string | undefined {
        return this['cause_id'];
    }
}