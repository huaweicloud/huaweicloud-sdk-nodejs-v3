

export class AtomicOutputModel {
    public supported?: boolean;
    public type?: string;
    public constructor() { 
    }
    public withSupported(supported: boolean): AtomicOutputModel {
        this['supported'] = supported;
        return this;
    }
    public withType(type: string): AtomicOutputModel {
        this['type'] = type;
        return this;
    }
}