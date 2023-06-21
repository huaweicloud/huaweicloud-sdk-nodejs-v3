

export class AppState {
    public state?: AppStateStateEnum;
    private 'update_time'?: string | undefined;
    public constructor() { 
    }
    public withState(state: AppStateStateEnum): AppState {
        this['state'] = state;
        return this;
    }
    public withUpdateTime(updateTime: string): AppState {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AppStateStateEnum {
    ACTIVATION = 'ACTIVATION',
    DEACTIVATION = 'DEACTIVATION',
    ARREARS = 'ARREARS',
    DELETED = 'DELETED'
}
