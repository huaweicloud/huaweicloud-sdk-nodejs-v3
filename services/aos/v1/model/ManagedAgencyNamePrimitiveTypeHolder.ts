

export class ManagedAgencyNamePrimitiveTypeHolder {
    private 'managed_agency_name'?: string;
    public constructor() { 
    }
    public withManagedAgencyName(managedAgencyName: string): ManagedAgencyNamePrimitiveTypeHolder {
        this['managed_agency_name'] = managedAgencyName;
        return this;
    }
    public set managedAgencyName(managedAgencyName: string  | undefined) {
        this['managed_agency_name'] = managedAgencyName;
    }
    public get managedAgencyName(): string | undefined {
        return this['managed_agency_name'];
    }
}