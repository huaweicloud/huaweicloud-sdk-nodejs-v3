

export class BaseUser {
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
    public withName(name: string): BaseUser {
        this['name'] = name;
        return this;
    }
    public withContact(contact: string): BaseUser {
        this['contact'] = contact;
        return this;
    }
    public withCountry(country: string): BaseUser {
        this['country'] = country;
        return this;
    }
    public withDeptCode(deptCode: string): BaseUser {
        this['deptCode'] = deptCode;
        return this;
    }
    public withTitle(title: string): BaseUser {
        this['title'] = title;
        return this;
    }
    public withSortLevel(sortLevel: number): BaseUser {
        this['sortLevel'] = sortLevel;
        return this;
    }
    public withDesc(desc: string): BaseUser {
        this['desc'] = desc;
        return this;
    }
}