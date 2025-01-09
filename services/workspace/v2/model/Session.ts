import { Vdi } from './Vdi';


export class Session {
    public vdi?: Vdi;
    private 'self_help_console'?: boolean;
    private 'disconnect_on_lock_flag'?: boolean;
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
}