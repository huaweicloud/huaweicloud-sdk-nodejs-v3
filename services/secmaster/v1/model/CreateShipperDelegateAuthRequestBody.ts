

export class CreateShipperDelegateAuthRequestBody {
    private 'agency_name'?: string;
    public constructor() { 
    }
    public withAgencyName(agencyName: string): CreateShipperDelegateAuthRequestBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
}