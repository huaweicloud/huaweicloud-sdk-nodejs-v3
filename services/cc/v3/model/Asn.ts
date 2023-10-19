

export class Asn {
    public asn?: number;
    public constructor(asn?: number) { 
        this['asn'] = asn;
    }
    public withAsn(asn: number): Asn {
        this['asn'] = asn;
        return this;
    }
}