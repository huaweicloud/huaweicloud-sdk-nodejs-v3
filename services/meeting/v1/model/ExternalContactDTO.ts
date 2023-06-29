import { ExternalContactBase } from './ExternalContactBase';


export class ExternalContactDTO {
    public otherNumber?: string;
    public otherNumberCountry?: string;
    public country?: string;
    public phone?: string;
    public email?: string;
    public corpName?: string;
    public deptName?: string;
    public position?: string;
    public address?: string;
    public remarks?: string;
    public id?: string;
    public name?: string;
    public customNumber?: string;
    public updateTime?: number;
    public type?: string;
    public constructor() { 
    }
    public withOtherNumber(otherNumber: string): ExternalContactDTO {
        this['otherNumber'] = otherNumber;
        return this;
    }
    public withOtherNumberCountry(otherNumberCountry: string): ExternalContactDTO {
        this['otherNumberCountry'] = otherNumberCountry;
        return this;
    }
    public withCountry(country: string): ExternalContactDTO {
        this['country'] = country;
        return this;
    }
    public withPhone(phone: string): ExternalContactDTO {
        this['phone'] = phone;
        return this;
    }
    public withEmail(email: string): ExternalContactDTO {
        this['email'] = email;
        return this;
    }
    public withCorpName(corpName: string): ExternalContactDTO {
        this['corpName'] = corpName;
        return this;
    }
    public withDeptName(deptName: string): ExternalContactDTO {
        this['deptName'] = deptName;
        return this;
    }
    public withPosition(position: string): ExternalContactDTO {
        this['position'] = position;
        return this;
    }
    public withAddress(address: string): ExternalContactDTO {
        this['address'] = address;
        return this;
    }
    public withRemarks(remarks: string): ExternalContactDTO {
        this['remarks'] = remarks;
        return this;
    }
    public withId(id: string): ExternalContactDTO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ExternalContactDTO {
        this['name'] = name;
        return this;
    }
    public withCustomNumber(customNumber: string): ExternalContactDTO {
        this['customNumber'] = customNumber;
        return this;
    }
    public withUpdateTime(updateTime: number): ExternalContactDTO {
        this['updateTime'] = updateTime;
        return this;
    }
    public withType(type: string): ExternalContactDTO {
        this['type'] = type;
        return this;
    }
}