

export class CreatingStep {
    public step?: number;
    public type?: string;
    public constructor() { 
    }
    public withStep(step: number): CreatingStep {
        this['step'] = step;
        return this;
    }
    public withType(type: string): CreatingStep {
        this['type'] = type;
        return this;
    }
}