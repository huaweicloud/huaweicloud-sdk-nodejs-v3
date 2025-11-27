

export class AdministrationAgencyNamePrimitiveTypeHolder {
    private 'administration_agency_name'?: string;
    public constructor() { 
    }
    public withAdministrationAgencyName(administrationAgencyName: string): AdministrationAgencyNamePrimitiveTypeHolder {
        this['administration_agency_name'] = administrationAgencyName;
        return this;
    }
    public set administrationAgencyName(administrationAgencyName: string  | undefined) {
        this['administration_agency_name'] = administrationAgencyName;
    }
    public get administrationAgencyName(): string | undefined {
        return this['administration_agency_name'];
    }
}