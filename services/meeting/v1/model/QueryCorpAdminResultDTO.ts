import { DeptBasicDTO } from './DeptBasicDTO';


export class QueryCorpAdminResultDTO {
    public id?: string;
    public account?: string;
    public name?: string;
    public adminType?: number;
    public email?: string;
    public phone?: string;
    public country?: string;
    public dept?: DeptBasicDTO;
    public constructor() { 
    }
    public withId(id: string): QueryCorpAdminResultDTO {
        this['id'] = id;
        return this;
    }
    public withAccount(account: string): QueryCorpAdminResultDTO {
        this['account'] = account;
        return this;
    }
    public withName(name: string): QueryCorpAdminResultDTO {
        this['name'] = name;
        return this;
    }
    public withAdminType(adminType: number): QueryCorpAdminResultDTO {
        this['adminType'] = adminType;
        return this;
    }
    public withEmail(email: string): QueryCorpAdminResultDTO {
        this['email'] = email;
        return this;
    }
    public withPhone(phone: string): QueryCorpAdminResultDTO {
        this['phone'] = phone;
        return this;
    }
    public withCountry(country: string): QueryCorpAdminResultDTO {
        this['country'] = country;
        return this;
    }
    public withDept(dept: DeptBasicDTO): QueryCorpAdminResultDTO {
        this['dept'] = dept;
        return this;
    }
}