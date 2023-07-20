

export class RestSetCohostBody {
    public isCohost?: number;
    public constructor(isCohost?: number) { 
        this['isCohost'] = isCohost;
    }
    public withIsCohost(isCohost: number): RestSetCohostBody {
        this['isCohost'] = isCohost;
        return this;
    }
}