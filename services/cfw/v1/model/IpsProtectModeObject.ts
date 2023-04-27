

export class IpsProtectModeObject {
    public id?: string;
    public mode?: number;
    public constructor() { 
    }
    public withId(id: string): IpsProtectModeObject {
        this['id'] = id;
        return this;
    }
    public withMode(mode: number): IpsProtectModeObject {
        this['mode'] = mode;
        return this;
    }
}