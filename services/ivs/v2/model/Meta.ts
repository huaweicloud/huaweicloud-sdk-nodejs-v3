

export class Meta {
    public uuid?: string;
    public constructor() { 
    }
    public withUuid(uuid: string): Meta {
        this['uuid'] = uuid;
        return this;
    }
}