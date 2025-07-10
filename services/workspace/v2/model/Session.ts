import { Vdi } from './Vdi';


export class Session {
    public vdi?: Vdi;
    private 'self_help_console'?: boolean;
    private 'disconnect_on_lock_flag'?: boolean;
    private 'auto_lock_start_time'?: string;
    private 'auto_lock_end_time'?: string;
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
}