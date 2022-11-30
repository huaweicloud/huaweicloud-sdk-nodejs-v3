

export class AccessProgress {
    public step?: number;
    public status?: number;
    public constructor() { 
    }
    public withStep(step: number): AccessProgress {
        this['step'] = step;
        return this;
    }
    public withStatus(status: number): AccessProgress {
        this['status'] = status;
        return this;
    }
}