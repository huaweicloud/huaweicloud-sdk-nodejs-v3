

export class Compress {
    public status?: string;
    public type?: string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: string): Compress {
        this['status'] = status;
        return this;
    }
    public withType(type: string): Compress {
        this['type'] = type;
        return this;
    }
}