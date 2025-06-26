import { AutoLogoutOptions } from './AutoLogoutOptions';


export class SbcAutomaticDisconnectionOptions {
    private 'disconnection_waiting_time'?: number;
    private 'sbc_auto_logout'?: boolean;
    private 'auto_logout_options'?: AutoLogoutOptions;
    public constructor() { 
    }
    public withDisconnectionWaitingTime(disconnectionWaitingTime: number): SbcAutomaticDisconnectionOptions {
        this['disconnection_waiting_time'] = disconnectionWaitingTime;
        return this;
    }
    public set disconnectionWaitingTime(disconnectionWaitingTime: number  | undefined) {
        this['disconnection_waiting_time'] = disconnectionWaitingTime;
    }
    public get disconnectionWaitingTime(): number | undefined {
        return this['disconnection_waiting_time'];
    }
    public withSbcAutoLogout(sbcAutoLogout: boolean): SbcAutomaticDisconnectionOptions {
        this['sbc_auto_logout'] = sbcAutoLogout;
        return this;
    }
    public set sbcAutoLogout(sbcAutoLogout: boolean  | undefined) {
        this['sbc_auto_logout'] = sbcAutoLogout;
    }
    public get sbcAutoLogout(): boolean | undefined {
        return this['sbc_auto_logout'];
    }
    public withAutoLogoutOptions(autoLogoutOptions: AutoLogoutOptions): SbcAutomaticDisconnectionOptions {
        this['auto_logout_options'] = autoLogoutOptions;
        return this;
    }
    public set autoLogoutOptions(autoLogoutOptions: AutoLogoutOptions  | undefined) {
        this['auto_logout_options'] = autoLogoutOptions;
    }
    public get autoLogoutOptions(): AutoLogoutOptions | undefined {
        return this['auto_logout_options'];
    }
}