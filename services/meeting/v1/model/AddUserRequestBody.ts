import { BaseUser } from './BaseUser';


export class AddUserRequestBody {
    public name?: string;
    public contact?: string;
    public country?: string;
    public deptCode?: string;
    public title?: string;
    public sortLevel?: number;
    public desc?: string;
    public constructor(name?: string, contact?: string) { 
        this['name'] = name;
        this['contact'] = contact;
    }
    public withName(name: string): AddUserRequestBody {
        this['name'] = name;
        return this;
    }
    public withContact(contact: string): AddUserRequestBody {
        this['contact'] = contact;
        return this;
    }
    public withCountry(country: string): AddUserRequestBody {
        this['country'] = country;
        return this;
    }
    public withDeptCode(deptCode: string): AddUserRequestBody {
        this['deptCode'] = deptCode;
        return this;
    }
    public withTitle(title: string): AddUserRequestBody {
        this['title'] = title;
        return this;
    }
    public withSortLevel(sortLevel: number): AddUserRequestBody {
        this['sortLevel'] = sortLevel;
        return this;
    }
    public withDesc(desc: string): AddUserRequestBody {
        this['desc'] = desc;
        return this;
    }
}