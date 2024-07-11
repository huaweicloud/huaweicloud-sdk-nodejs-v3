

export class AppBaseInfo {
    public id?: string;
    public name?: string;
    public region?: string;
    private 'is_disable'?: boolean;
    public constructor() { 
    }
    public withId(id: string): AppBaseInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppBaseInfo {
        this['name'] = name;
        return this;
    }
    public withRegion(region: string): AppBaseInfo {
        this['region'] = region;
        return this;
    }
    public withIsDisable(isDisable: boolean): AppBaseInfo {
        this['is_disable'] = isDisable;
        return this;
    }
    public set isDisable(isDisable: boolean  | undefined) {
        this['is_disable'] = isDisable;
    }
    public get isDisable(): boolean | undefined {
        return this['is_disable'];
    }
}