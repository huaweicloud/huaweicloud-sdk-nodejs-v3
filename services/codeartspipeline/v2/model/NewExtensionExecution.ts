

export class NewExtensionExecution {
    public target?: string;
    public type?: string;
    public sha256?: string;
    public constructor() { 
    }
    public withTarget(target: string): NewExtensionExecution {
        this['target'] = target;
        return this;
    }
    public withType(type: string): NewExtensionExecution {
        this['type'] = type;
        return this;
    }
    public withSha256(sha256: string): NewExtensionExecution {
        this['sha256'] = sha256;
        return this;
    }
}