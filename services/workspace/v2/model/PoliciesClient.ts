import { PoliciesClientAutocloseMonitorOptions } from './PoliciesClientAutocloseMonitorOptions';
import { PoliciesClientClientType } from './PoliciesClientClientType';


export class PoliciesClient {
    private 'automatic_reconnection_interval'?: number;
    private 'session_persistence_time'?: number;
    private 'autoclose_monitor_after_locked'?: boolean;
    private 'autoclose_monitor_options'?: PoliciesClientAutocloseMonitorOptions;
    private 'forbid_screen_capture'?: boolean;
    private 'client_machine_join_domain'?: boolean;
    private 'client_type'?: PoliciesClientClientType;
    public constructor() { 
    }
    public withAutomaticReconnectionInterval(automaticReconnectionInterval: number): PoliciesClient {
        this['automatic_reconnection_interval'] = automaticReconnectionInterval;
        return this;
    }
    public set automaticReconnectionInterval(automaticReconnectionInterval: number  | undefined) {
        this['automatic_reconnection_interval'] = automaticReconnectionInterval;
    }
    public get automaticReconnectionInterval(): number | undefined {
        return this['automatic_reconnection_interval'];
    }
    public withSessionPersistenceTime(sessionPersistenceTime: number): PoliciesClient {
        this['session_persistence_time'] = sessionPersistenceTime;
        return this;
    }
    public set sessionPersistenceTime(sessionPersistenceTime: number  | undefined) {
        this['session_persistence_time'] = sessionPersistenceTime;
    }
    public get sessionPersistenceTime(): number | undefined {
        return this['session_persistence_time'];
    }
    public withAutocloseMonitorAfterLocked(autocloseMonitorAfterLocked: boolean): PoliciesClient {
        this['autoclose_monitor_after_locked'] = autocloseMonitorAfterLocked;
        return this;
    }
    public set autocloseMonitorAfterLocked(autocloseMonitorAfterLocked: boolean  | undefined) {
        this['autoclose_monitor_after_locked'] = autocloseMonitorAfterLocked;
    }
    public get autocloseMonitorAfterLocked(): boolean | undefined {
        return this['autoclose_monitor_after_locked'];
    }
    public withAutocloseMonitorOptions(autocloseMonitorOptions: PoliciesClientAutocloseMonitorOptions): PoliciesClient {
        this['autoclose_monitor_options'] = autocloseMonitorOptions;
        return this;
    }
    public set autocloseMonitorOptions(autocloseMonitorOptions: PoliciesClientAutocloseMonitorOptions  | undefined) {
        this['autoclose_monitor_options'] = autocloseMonitorOptions;
    }
    public get autocloseMonitorOptions(): PoliciesClientAutocloseMonitorOptions | undefined {
        return this['autoclose_monitor_options'];
    }
    public withForbidScreenCapture(forbidScreenCapture: boolean): PoliciesClient {
        this['forbid_screen_capture'] = forbidScreenCapture;
        return this;
    }
    public set forbidScreenCapture(forbidScreenCapture: boolean  | undefined) {
        this['forbid_screen_capture'] = forbidScreenCapture;
    }
    public get forbidScreenCapture(): boolean | undefined {
        return this['forbid_screen_capture'];
    }
    public withClientMachineJoinDomain(clientMachineJoinDomain: boolean): PoliciesClient {
        this['client_machine_join_domain'] = clientMachineJoinDomain;
        return this;
    }
    public set clientMachineJoinDomain(clientMachineJoinDomain: boolean  | undefined) {
        this['client_machine_join_domain'] = clientMachineJoinDomain;
    }
    public get clientMachineJoinDomain(): boolean | undefined {
        return this['client_machine_join_domain'];
    }
    public withClientType(clientType: PoliciesClientClientType): PoliciesClient {
        this['client_type'] = clientType;
        return this;
    }
    public set clientType(clientType: PoliciesClientClientType  | undefined) {
        this['client_type'] = clientType;
    }
    public get clientType(): PoliciesClientClientType | undefined {
        return this['client_type'];
    }
}