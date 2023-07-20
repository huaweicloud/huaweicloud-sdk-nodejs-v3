

export class AppState {
    public state?: AppStateStateEnum | string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withState(state: AppStateStateEnum | string): AppState {
        this['state'] = state;
        return this;
    }
    public withUpdateTime(updateTime: string): AppState {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
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
