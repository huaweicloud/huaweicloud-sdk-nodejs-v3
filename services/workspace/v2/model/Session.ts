import { Vdi } from './Vdi';


export class Session {
    public vdi?: Vdi;
    private 'self_help_console'?: boolean;
    private 'disconnect_on_lock_flag'?: boolean;
    private 'auto_lock_start_time'?: string;
    private 'auto_lock_end_time'?: string;
    private 'is_lock_screen_on_disconnect'?: boolean;
    public constructor() { 
    }
    public withVdi(vdi: Vdi): Session {
        this['vdi'] = vdi;
        return this;
    }
    public withSelfHelpConsole(selfHelpConsole: boolean): Session {
        this['self_help_console'] = selfHelpConsole;
        return this;
    }
    public set selfHelpConsole(selfHelpConsole: boolean  | undefined) {
        this['self_help_console'] = selfHelpConsole;
    }
    public get selfHelpConsole(): boolean | undefined {
        return this['self_help_console'];
    }
    public withDisconnectOnLockFlag(disconnectOnLockFlag: boolean): Session {
        this['disconnect_on_lock_flag'] = disconnectOnLockFlag;
        return this;
    }
    public set disconnectOnLockFlag(disconnectOnLockFlag: boolean  | undefined) {
        this['disconnect_on_lock_flag'] = disconnectOnLockFlag;
    }
    public get disconnectOnLockFlag(): boolean | undefined {
        return this['disconnect_on_lock_flag'];
    }
    public withAutoLockStartTime(autoLockStartTime: string): Session {
        this['auto_lock_start_time'] = autoLockStartTime;
        return this;
    }
    public set autoLockStartTime(autoLockStartTime: string  | undefined) {
        this['auto_lock_start_time'] = autoLockStartTime;
    }
    public get autoLockStartTime(): string | undefined {
        return this['auto_lock_start_time'];
    }
    public withAutoLockEndTime(autoLockEndTime: string): Session {
        this['auto_lock_end_time'] = autoLockEndTime;
        return this;
    }
    public set autoLockEndTime(autoLockEndTime: string  | undefined) {
        this['auto_lock_end_time'] = autoLockEndTime;
    }
    public get autoLockEndTime(): string | undefined {
        return this['auto_lock_end_time'];
    }
    public withIsLockScreenOnDisconnect(isLockScreenOnDisconnect: boolean): Session {
        this['is_lock_screen_on_disconnect'] = isLockScreenOnDisconnect;
        return this;
    }
    public set isLockScreenOnDisconnect(isLockScreenOnDisconnect: boolean  | undefined) {
        this['is_lock_screen_on_disconnect'] = isLockScreenOnDisconnect;
    }
    public get isLockScreenOnDisconnect(): boolean | undefined {
        return this['is_lock_screen_on_disconnect'];
    }
}