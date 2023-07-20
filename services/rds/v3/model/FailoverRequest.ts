

export class FailoverRequest {
    public force?: boolean;
    public constructor() { 
    }
    public withForce(force: boolean): FailoverRequest {
        this['force'] = force;
        return this;
    }
}