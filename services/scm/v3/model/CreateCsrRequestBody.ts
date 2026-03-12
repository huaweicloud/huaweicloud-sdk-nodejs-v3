

export class CreateCsrRequestBody {
    public name?: string;
    private 'domain_name'?: string;
    public sans?: string;
    private 'private_key_algo'?: string;
    public usage?: string;
    private 'company_country'?: string;
    private 'company_province'?: string;
    private 'company_city'?: string;
    private 'company_name'?: string;
    public constructor(name?: string, domainName?: string, privateKeyAlgo?: string, usage?: string) { 
        this['name'] = name;
        this['domain_name'] = domainName;
        this['private_key_algo'] = privateKeyAlgo;
        this['usage'] = usage;
    }
    public withName(name: string): CreateCsrRequestBody {
        this['name'] = name;
        return this;
    }
    public withDomainName(domainName: string): CreateCsrRequestBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withSans(sans: string): CreateCsrRequestBody {
        this['sans'] = sans;
        return this;
    }
    public withPrivateKeyAlgo(privateKeyAlgo: string): CreateCsrRequestBody {
        this['private_key_algo'] = privateKeyAlgo;
        return this;
    }
    public set privateKeyAlgo(privateKeyAlgo: string  | undefined) {
        this['private_key_algo'] = privateKeyAlgo;
    }
    public get privateKeyAlgo(): string | undefined {
        return this['private_key_algo'];
    }
    public withUsage(usage: string): CreateCsrRequestBody {
        this['usage'] = usage;
        return this;
    }
    public withCompanyCountry(companyCountry: string): CreateCsrRequestBody {
        this['company_country'] = companyCountry;
        return this;
    }
    public set companyCountry(companyCountry: string  | undefined) {
        this['company_country'] = companyCountry;
    }
    public get companyCountry(): string | undefined {
        return this['company_country'];
    }
    public withCompanyProvince(companyProvince: string): CreateCsrRequestBody {
        this['company_province'] = companyProvince;
        return this;
    }
    public set companyProvince(companyProvince: string  | undefined) {
        this['company_province'] = companyProvince;
    }
    public get companyProvince(): string | undefined {
        return this['company_province'];
    }
    public withCompanyCity(companyCity: string): CreateCsrRequestBody {
        this['company_city'] = companyCity;
        return this;
    }
    public set companyCity(companyCity: string  | undefined) {
        this['company_city'] = companyCity;
    }
    public get companyCity(): string | undefined {
        return this['company_city'];
    }
    public withCompanyName(companyName: string): CreateCsrRequestBody {
        this['company_name'] = companyName;
        return this;
    }
    public set companyName(companyName: string  | undefined) {
        this['company_name'] = companyName;
    }
    public get companyName(): string | undefined {
        return this['company_name'];
    }
}