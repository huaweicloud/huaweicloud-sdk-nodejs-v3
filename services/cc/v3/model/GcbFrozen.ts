

export class GcbFrozen {
    public frozen?: boolean;
    public constructor() { 
    }
    public withFrozen(frozen: boolean): GcbFrozen {
        this['frozen'] = frozen;
        return this;
    }
}