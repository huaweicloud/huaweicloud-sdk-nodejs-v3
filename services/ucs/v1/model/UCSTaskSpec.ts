

export class UCSTaskSpec {
    public jobID?: string;
    public target?: string;
    public targetType?: string;
    public waitTimeOut?: number;
    public type?: string;
    public runway?: string;
    public constructor() { 
    }
    public withJobID(jobID: string): UCSTaskSpec {
        this['jobID'] = jobID;
        return this;
    }
    public withTarget(target: string): UCSTaskSpec {
        this['target'] = target;
        return this;
    }
    public withTargetType(targetType: string): UCSTaskSpec {
        this['targetType'] = targetType;
        return this;
    }
    public withWaitTimeOut(waitTimeOut: number): UCSTaskSpec {
        this['waitTimeOut'] = waitTimeOut;
        return this;
    }
    public withType(type: string): UCSTaskSpec {
        this['type'] = type;
        return this;
    }
    public withRunway(runway: string): UCSTaskSpec {
        this['runway'] = runway;
        return this;
    }
}