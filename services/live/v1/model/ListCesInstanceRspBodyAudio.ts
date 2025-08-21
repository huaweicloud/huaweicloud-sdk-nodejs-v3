

export class ListCesInstanceRspBodyAudio {
    public id?: string;
    public name?: string;
    public constructor() { 
    }
    public withId(id: string): ListCesInstanceRspBodyAudio {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListCesInstanceRspBodyAudio {
        this['name'] = name;
        return this;
    }
}