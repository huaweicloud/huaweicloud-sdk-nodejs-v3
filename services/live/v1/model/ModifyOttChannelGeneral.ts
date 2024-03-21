

export class ModifyOttChannelGeneral {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public name?: string;
    public constructor(domain?: string, appName?: string, id?: string, name?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
        this['name'] = name;
    }
    public withDomain(domain: string): ModifyOttChannelGeneral {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ModifyOttChannelGeneral {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ModifyOttChannelGeneral {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ModifyOttChannelGeneral {
        this['name'] = name;
        return this;
    }
}