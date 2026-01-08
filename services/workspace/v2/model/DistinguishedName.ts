

export class DistinguishedName {
    private 'common_name'?: string;
    public country?: string;
    public state?: string;
    public locality?: string;
    public organization?: string;
    private 'organizational_unit'?: string;
    public constructor(commonName?: string, country?: string, state?: string, locality?: string, organization?: string, organizationalUnit?: string) { 
        this['common_name'] = commonName;
        this['country'] = country;
        this['state'] = state;
        this['locality'] = locality;
        this['organization'] = organization;
        this['organizational_unit'] = organizationalUnit;
    }
    public withCommonName(commonName: string): DistinguishedName {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withCountry(country: string): DistinguishedName {
        this['country'] = country;
        return this;
    }
    public withState(state: string): DistinguishedName {
        this['state'] = state;
        return this;
    }
    public withLocality(locality: string): DistinguishedName {
        this['locality'] = locality;
        return this;
    }
    public withOrganization(organization: string): DistinguishedName {
        this['organization'] = organization;
        return this;
    }
    public withOrganizationalUnit(organizationalUnit: string): DistinguishedName {
        this['organizational_unit'] = organizationalUnit;
        return this;
    }
    public set organizationalUnit(organizationalUnit: string  | undefined) {
        this['organizational_unit'] = organizationalUnit;
    }
    public get organizationalUnit(): string | undefined {
        return this['organizational_unit'];
    }
}