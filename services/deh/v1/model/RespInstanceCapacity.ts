

export class RespInstanceCapacity {
    public flavor?: string;
    public constructor(flavor?: string) { 
        this['flavor'] = flavor;
    }
    public withFlavor(flavor: string): RespInstanceCapacity {
        this['flavor'] = flavor;
        return this;
    }
}