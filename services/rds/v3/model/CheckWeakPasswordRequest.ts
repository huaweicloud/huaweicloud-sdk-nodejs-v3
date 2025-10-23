

export class CheckWeakPasswordRequest {
    public target?: string;
    public engine?: string;
    public constructor() { 
    }
    public withTarget(target: string): CheckWeakPasswordRequest {
        this['target'] = target;
        return this;
    }
    public withEngine(engine: string): CheckWeakPasswordRequest {
        this['engine'] = engine;
        return this;
    }
}