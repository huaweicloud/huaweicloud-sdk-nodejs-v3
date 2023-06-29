

export class ExternalContactBase {
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
    public constructor() { 
    }
    public withOtherNumber(otherNumber: string): ExternalContactBase {
        this['otherNumber'] = otherNumber;
        return this;
    }
    public withOtherNumberCountry(otherNumberCountry: string): ExternalContactBase {
        this['otherNumberCountry'] = otherNumberCountry;
        return this;
    }
    public withCountry(country: string): ExternalContactBase {
        this['country'] = country;
        return this;
    }
    public withPhone(phone: string): ExternalContactBase {
        this['phone'] = phone;
        return this;
    }
    public withEmail(email: string): ExternalContactBase {
        this['email'] = email;
        return this;
    }
    public withCorpName(corpName: string): ExternalContactBase {
        this['corpName'] = corpName;
        return this;
    }
    public withDeptName(deptName: string): ExternalContactBase {
        this['deptName'] = deptName;
        return this;
    }
    public withPosition(position: string): ExternalContactBase {
        this['position'] = position;
        return this;
    }
    public withAddress(address: string): ExternalContactBase {
        this['address'] = address;
        return this;
    }
    public withRemarks(remarks: string): ExternalContactBase {
        this['remarks'] = remarks;
        return this;
    }
}