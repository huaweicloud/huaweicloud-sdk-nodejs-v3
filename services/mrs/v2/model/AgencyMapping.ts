

export class AgencyMapping {
    public agency?: string;
    private 'identifier_type'?: string;
    public identifiers?: Array<string>;
    private 'agency_id'?: string;
    public constructor(agency?: string, identifierType?: string, identifiers?: Array<string>, agencyId?: string) { 
        this['agency'] = agency;
        this['identifier_type'] = identifierType;
        this['identifiers'] = identifiers;
        this['agency_id'] = agencyId;
    }
    public withAgency(agency: string): AgencyMapping {
        this['agency'] = agency;
        return this;
    }
    public withIdentifierType(identifierType: string): AgencyMapping {
        this['identifier_type'] = identifierType;
        return this;
    }
    public set identifierType(identifierType: string  | undefined) {
        this['identifier_type'] = identifierType;
    }
    public get identifierType(): string | undefined {
        return this['identifier_type'];
    }
    public withIdentifiers(identifiers: Array<string>): AgencyMapping {
        this['identifiers'] = identifiers;
        return this;
    }
    public withAgencyId(agencyId: string): AgencyMapping {
        this['agency_id'] = agencyId;
        return this;
    }
    public set agencyId(agencyId: string  | undefined) {
        this['agency_id'] = agencyId;
    }
    public get agencyId(): string | undefined {
        return this['agency_id'];
    }
}