
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCsrResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public csr?: string;
    private 'domain_name'?: string;
    public sans?: string;
    private 'private_key_algo'?: string;
    public usage?: string;
    private 'company_country'?: string;
    private 'company_province'?: string;
    private 'company_city'?: string;
    private 'company_name'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowCsrResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowCsrResponse {
        this['name'] = name;
        return this;
    }
    public withCsr(csr: string): ShowCsrResponse {
        this['csr'] = csr;
        return this;
    }
    public withDomainName(domainName: string): ShowCsrResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withSans(sans: string): ShowCsrResponse {
        this['sans'] = sans;
        return this;
    }
    public withPrivateKeyAlgo(privateKeyAlgo: string): ShowCsrResponse {
        this['private_key_algo'] = privateKeyAlgo;
        return this;
    }
    public set privateKeyAlgo(privateKeyAlgo: string  | undefined) {
        this['private_key_algo'] = privateKeyAlgo;
    }
    public get privateKeyAlgo(): string | undefined {
        return this['private_key_algo'];
    }
    public withUsage(usage: string): ShowCsrResponse {
        this['usage'] = usage;
        return this;
    }
    public withCompanyCountry(companyCountry: string): ShowCsrResponse {
        this['company_country'] = companyCountry;
        return this;
    }
    public set companyCountry(companyCountry: string  | undefined) {
        this['company_country'] = companyCountry;
    }
    public get companyCountry(): string | undefined {
        return this['company_country'];
    }
    public withCompanyProvince(companyProvince: string): ShowCsrResponse {
        this['company_province'] = companyProvince;
        return this;
    }
    public set companyProvince(companyProvince: string  | undefined) {
        this['company_province'] = companyProvince;
    }
    public get companyProvince(): string | undefined {
        return this['company_province'];
    }
    public withCompanyCity(companyCity: string): ShowCsrResponse {
        this['company_city'] = companyCity;
        return this;
    }
    public set companyCity(companyCity: string  | undefined) {
        this['company_city'] = companyCity;
    }
    public get companyCity(): string | undefined {
        return this['company_city'];
    }
    public withCompanyName(companyName: string): ShowCsrResponse {
        this['company_name'] = companyName;
        return this;
    }
    public set companyName(companyName: string  | undefined) {
        this['company_name'] = companyName;
    }
    public get companyName(): string | undefined {
        return this['company_name'];
    }
    public withCreateTime(createTime: number): ShowCsrResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowCsrResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}