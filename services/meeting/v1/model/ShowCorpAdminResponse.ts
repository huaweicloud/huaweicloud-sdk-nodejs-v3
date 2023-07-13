import { DeptBasicDTO } from './DeptBasicDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCorpAdminResponse extends SdkResponse {
    public id?: string;
    public account?: string;
    public name?: string;
    public adminType?: number;
    public email?: string;
    public phone?: string;
    public country?: string;
    public dept?: DeptBasicDTO;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowCorpAdminResponse {
        this['id'] = id;
        return this;
    }
    public withAccount(account: string): ShowCorpAdminResponse {
        this['account'] = account;
        return this;
    }
    public withName(name: string): ShowCorpAdminResponse {
        this['name'] = name;
        return this;
    }
    public withAdminType(adminType: number): ShowCorpAdminResponse {
        this['adminType'] = adminType;
        return this;
    }
    public withEmail(email: string): ShowCorpAdminResponse {
        this['email'] = email;
        return this;
    }
    public withPhone(phone: string): ShowCorpAdminResponse {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): ShowCorpAdminResponse {
        this['country'] = country;
        return this;
    }
    public withDept(dept: DeptBasicDTO): ShowCorpAdminResponse {
        this['dept'] = dept;
        return this;
    }
}