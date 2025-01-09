

export class ModifyOuNameInfoV2Req {
    public id?: string;
    private 'ou_name'?: string;
    public description?: string;
    public constructor(ouName?: string) { 
        this['ou_name'] = ouName;
    }
    public withId(id: string): ModifyOuNameInfoV2Req {
        this['id'] = id;
        return this;
    }
    public withOuName(ouName: string): ModifyOuNameInfoV2Req {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withDescription(description: string): ModifyOuNameInfoV2Req {
        this['description'] = description;
        return this;
    }
}