import { AutoDisconnectOrLogoutControlOptions } from './AutoDisconnectOrLogoutControlOptions';


export class AutoLockOptions {
    private 'auto_lock_minutes'?: number;
    private 'auto_disconnect'?: AutoLockOptionsAutoDisconnectEnum | string;
    public options?: AutoDisconnectOrLogoutControlOptions;
    public constructor() { 
    }
    public withAutoLockMinutes(autoLockMinutes: number): AutoLockOptions {
        this['auto_lock_minutes'] = autoLockMinutes;
        return this;
    }
    public set autoLockMinutes(autoLockMinutes: number  | undefined) {
        this['auto_lock_minutes'] = autoLockMinutes;
    }
    public get autoLockMinutes(): number | undefined {
        return this['auto_lock_minutes'];
    }
    public withAutoDisconnect(autoDisconnect: AutoLockOptionsAutoDisconnectEnum | string): AutoLockOptions {
        this['auto_disconnect'] = autoDisconnect;
        return this;
    }
    public set autoDisconnect(autoDisconnect: AutoLockOptionsAutoDisconnectEnum | string  | undefined) {
        this['auto_disconnect'] = autoDisconnect;
    }
    public get autoDisconnect(): AutoLockOptionsAutoDisconnectEnum | string | undefined {
        return this['auto_disconnect'];
    }
    public withOptions(options: AutoDisconnectOrLogoutControlOptions): AutoLockOptions {
        this['options'] = options;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AutoLockOptionsAutoDisconnectEnum {
    AUTO_DISCONNECT = 'AUTO_DISCONNECT',
    AUTO_LOGOUT = 'AUTO_LOGOUT',
    DISABLED = 'DISABLED',
    AUTO_RESTART = 'AUTO_RESTART',
    AUTO_STOP = 'AUTO_STOP',
    HIBERNATE = 'HIBERNATE'
}
