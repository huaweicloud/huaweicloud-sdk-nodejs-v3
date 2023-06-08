

export class BatchTargets {
    public targets?: Array<string>;
    public constructor() { 
    }
    public withTargets(targets: Array<string>): BatchTargets {
        this['targets'] = targets;
        return this;
    }
}