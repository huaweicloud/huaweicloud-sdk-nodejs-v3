

export class ShowAlertDetailDataclassRef {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ShowAlertDetailDataclassRef {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowAlertDetailDataclassRef {
        this['name'] = name;
        return this;
    }
}