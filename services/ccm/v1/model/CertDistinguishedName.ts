

export class CertDistinguishedName {
    private 'common_name'?: string;
    public country?: string;
    public state?: string;
    public locality?: string;
    public organization?: string;
    private 'organizational_unit'?: string;
    public constructor(commonName?: string) { 
        this['common_name'] = commonName;
    }
    public withCommonName(commonName: string): CertDistinguishedName {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withCountry(country: string): CertDistinguishedName {
        this['country'] = country;
        return this;
    }
    public withState(state: string): CertDistinguishedName {
        this['state'] = state;
        return this;
    }
    public withLocality(locality: string): CertDistinguishedName {
        this['locality'] = locality;
        return this;
    }
    public withOrganization(organization: string): CertDistinguishedName {
        this['organization'] = organization;
        return this;
    }
    public withOrganizationalUnit(organizationalUnit: string): CertDistinguishedName {
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