

export class CertDuration {
    public duration?: number;
    public constructor(duration?: number) { 
        this['duration'] = duration;
    }
    public withDuration(duration: number): CertDuration {
        this['duration'] = duration;
        return this;
    }
}