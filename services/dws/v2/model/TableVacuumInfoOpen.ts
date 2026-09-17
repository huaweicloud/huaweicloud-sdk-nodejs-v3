import { TableInfoOpen } from './TableInfoOpen';


export class TableVacuumInfoOpen {
    private 'vacuum_running_info'?: Array<TableInfoOpen>;
    private 'vacuum_waiting_info'?: Array<TableInfoOpen>;
    private 'vacuum_finished_info'?: Array<TableInfoOpen>;
    private 'vacuum_canceled_info'?: Array<TableInfoOpen>;
    public constructor() { 
    }
    public withVacuumRunningInfo(vacuumRunningInfo: Array<TableInfoOpen>): TableVacuumInfoOpen {
        this['vacuum_running_info'] = vacuumRunningInfo;
        return this;
    }
    public set vacuumRunningInfo(vacuumRunningInfo: Array<TableInfoOpen>  | undefined) {
        this['vacuum_running_info'] = vacuumRunningInfo;
    }
    public get vacuumRunningInfo(): Array<TableInfoOpen> | undefined {
        return this['vacuum_running_info'];
    }
    public withVacuumWaitingInfo(vacuumWaitingInfo: Array<TableInfoOpen>): TableVacuumInfoOpen {
        this['vacuum_waiting_info'] = vacuumWaitingInfo;
        return this;
    }
    public set vacuumWaitingInfo(vacuumWaitingInfo: Array<TableInfoOpen>  | undefined) {
        this['vacuum_waiting_info'] = vacuumWaitingInfo;
    }
    public get vacuumWaitingInfo(): Array<TableInfoOpen> | undefined {
        return this['vacuum_waiting_info'];
    }
    public withVacuumFinishedInfo(vacuumFinishedInfo: Array<TableInfoOpen>): TableVacuumInfoOpen {
        this['vacuum_finished_info'] = vacuumFinishedInfo;
        return this;
    }
    public set vacuumFinishedInfo(vacuumFinishedInfo: Array<TableInfoOpen>  | undefined) {
        this['vacuum_finished_info'] = vacuumFinishedInfo;
    }
    public get vacuumFinishedInfo(): Array<TableInfoOpen> | undefined {
        return this['vacuum_finished_info'];
    }
    public withVacuumCanceledInfo(vacuumCanceledInfo: Array<TableInfoOpen>): TableVacuumInfoOpen {
        this['vacuum_canceled_info'] = vacuumCanceledInfo;
        return this;
    }
    public set vacuumCanceledInfo(vacuumCanceledInfo: Array<TableInfoOpen>  | undefined) {
        this['vacuum_canceled_info'] = vacuumCanceledInfo;
    }
    public get vacuumCanceledInfo(): Array<TableInfoOpen> | undefined {
        return this['vacuum_canceled_info'];
    }
}