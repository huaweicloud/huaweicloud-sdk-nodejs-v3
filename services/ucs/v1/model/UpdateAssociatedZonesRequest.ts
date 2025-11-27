

export class UpdateAssociatedZonesRequest {
    public dnsSuffix?: Array<string>;
    public constructor() { 
    }
    public withDnsSuffix(dnsSuffix: Array<string>): UpdateAssociatedZonesRequest {
        this['dnsSuffix'] = dnsSuffix;
        return this;
    }
}