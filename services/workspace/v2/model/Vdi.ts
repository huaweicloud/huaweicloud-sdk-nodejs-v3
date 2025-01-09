import { AutoLockOptions } from './AutoLockOptions';
import { DisconnectLogoutOptions } from './DisconnectLogoutOptions';
import { VdiDisconnectHibernateOptions } from './VdiDisconnectHibernateOptions';
import { VdiNoOperationHibernateOptions } from './VdiNoOperationHibernateOptions';


export class Vdi {
    private 'auto_lock_enable'?: boolean;
    private 'auto_lock_options'?: AutoLockOptions;
    private 'disconnect_logout_enable'?: number;
    private 'disconnect_logout_options'?: DisconnectLogoutOptions;
    private 'disconnect_hibernate_enable'?: boolean;
    private 'disconnect_hibernate_options'?: VdiDisconnectHibernateOptions;
    private 'no_operation_hibernate_enable'?: boolean;
    private 'no_operation_hibernate_options'?: VdiNoOperationHibernateOptions;
    public constructor() { 
    }
    public withAutoLockEnable(autoLockEnable: boolean): Vdi {
        this['auto_lock_enable'] = autoLockEnable;
        return this;
    }
    public set autoLockEnable(autoLockEnable: boolean  | undefined) {
        this['auto_lock_enable'] = autoLockEnable;
    }
    public get autoLockEnable(): boolean | undefined {
        return this['auto_lock_enable'];
    }
    public withAutoLockOptions(autoLockOptions: AutoLockOptions): Vdi {
        this['auto_lock_options'] = autoLockOptions;
        return this;
    }
    public set autoLockOptions(autoLockOptions: AutoLockOptions  | undefined) {
        this['auto_lock_options'] = autoLockOptions;
    }
    public get autoLockOptions(): AutoLockOptions | undefined {
        return this['auto_lock_options'];
    }
    public withDisconnectLogoutEnable(disconnectLogoutEnable: number): Vdi {
        this['disconnect_logout_enable'] = disconnectLogoutEnable;
        return this;
    }
    public set disconnectLogoutEnable(disconnectLogoutEnable: number  | undefined) {
        this['disconnect_logout_enable'] = disconnectLogoutEnable;
    }
    public get disconnectLogoutEnable(): number | undefined {
        return this['disconnect_logout_enable'];
    }
    public withDisconnectLogoutOptions(disconnectLogoutOptions: DisconnectLogoutOptions): Vdi {
        this['disconnect_logout_options'] = disconnectLogoutOptions;
        return this;
    }
    public set disconnectLogoutOptions(disconnectLogoutOptions: DisconnectLogoutOptions  | undefined) {
        this['disconnect_logout_options'] = disconnectLogoutOptions;
    }
    public get disconnectLogoutOptions(): DisconnectLogoutOptions | undefined {
        return this['disconnect_logout_options'];
    }
    public withDisconnectHibernateEnable(disconnectHibernateEnable: boolean): Vdi {
        this['disconnect_hibernate_enable'] = disconnectHibernateEnable;
        return this;
    }
    public set disconnectHibernateEnable(disconnectHibernateEnable: boolean  | undefined) {
        this['disconnect_hibernate_enable'] = disconnectHibernateEnable;
    }
    public get disconnectHibernateEnable(): boolean | undefined {
        return this['disconnect_hibernate_enable'];
    }
    public withDisconnectHibernateOptions(disconnectHibernateOptions: VdiDisconnectHibernateOptions): Vdi {
        this['disconnect_hibernate_options'] = disconnectHibernateOptions;
        return this;
    }
    public set disconnectHibernateOptions(disconnectHibernateOptions: VdiDisconnectHibernateOptions  | undefined) {
        this['disconnect_hibernate_options'] = disconnectHibernateOptions;
    }
    public get disconnectHibernateOptions(): VdiDisconnectHibernateOptions | undefined {
        return this['disconnect_hibernate_options'];
    }
    public withNoOperationHibernateEnable(noOperationHibernateEnable: boolean): Vdi {
        this['no_operation_hibernate_enable'] = noOperationHibernateEnable;
        return this;
    }
    public set noOperationHibernateEnable(noOperationHibernateEnable: boolean  | undefined) {
        this['no_operation_hibernate_enable'] = noOperationHibernateEnable;
    }
    public get noOperationHibernateEnable(): boolean | undefined {
        return this['no_operation_hibernate_enable'];
    }
    public withNoOperationHibernateOptions(noOperationHibernateOptions: VdiNoOperationHibernateOptions): Vdi {
        this['no_operation_hibernate_options'] = noOperationHibernateOptions;
        return this;
    }
    public set noOperationHibernateOptions(noOperationHibernateOptions: VdiNoOperationHibernateOptions  | undefined) {
        this['no_operation_hibernate_options'] = noOperationHibernateOptions;
    }
    public get noOperationHibernateOptions(): VdiNoOperationHibernateOptions | undefined {
        return this['no_operation_hibernate_options'];
    }
}