

export class CertDuration {
    public duration: number;
    public constructor(duration?: any) { 
        this['duration'] = duration;
    }
    public withDuration(duration: number): CertDuration {
        this['duration'] = duration;
        return this;
    }
}