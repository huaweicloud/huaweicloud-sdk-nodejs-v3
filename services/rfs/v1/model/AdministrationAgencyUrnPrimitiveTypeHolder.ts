

export class AdministrationAgencyUrnPrimitiveTypeHolder {
    private 'administration_agency_urn'?: string;
    public constructor() { 
    }
    public withAdministrationAgencyUrn(administrationAgencyUrn: string): AdministrationAgencyUrnPrimitiveTypeHolder {
        this['administration_agency_urn'] = administrationAgencyUrn;
        return this;
    }
    public set administrationAgencyUrn(administrationAgencyUrn: string  | undefined) {
        this['administration_agency_urn'] = administrationAgencyUrn;
    }
    public get administrationAgencyUrn(): string | undefined {
        return this['administration_agency_urn'];
    }
}