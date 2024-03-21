

export class ModifyOttChannelState {
    public domain?: string;
    private 'app_name'?: string;
    public id?: string;
    public state?: ModifyOttChannelStateStateEnum | string;
    public constructor(domain?: string, appName?: string, id?: string, state?: string) { 
        this['domain'] = domain;
        this['app_name'] = appName;
        this['id'] = id;
        this['state'] = state;
    }
    public withDomain(domain: string): ModifyOttChannelState {
        this['domain'] = domain;
        return this;
    }
    public withAppName(appName: string): ModifyOttChannelState {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withId(id: string): ModifyOttChannelState {
        this['id'] = id;
        return this;
    }
    public withState(state: ModifyOttChannelStateStateEnum | string): ModifyOttChannelState {
        this['state'] = state;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyOttChannelStateStateEnum {
    ON = 'ON',
    OFF = 'OFF'
}
