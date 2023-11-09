import { PlaybookInstanceRunStatistics } from './PlaybookInstanceRunStatistics';


export class PlaybookInstanceMonitorDetail {
    private 'total_instance_run_num'?: number;
    private 'schedule_instance_run_num'?: number;
    private 'event_instance_run_num'?: number;
    private 'average_run_time'?: number;
    private 'min_run_time_instance'?: PlaybookInstanceRunStatistics;
    private 'max_run_time_instance'?: PlaybookInstanceRunStatistics;
    private 'total_instance_num'?: number;
    private 'success_instance_num'?: number;
    private 'fail_instance_num'?: number;
    private 'terminate_instance_num'?: number;
    private 'running_instance_num'?: number;
    public constructor() { 
    }
    public withTotalInstanceRunNum(totalInstanceRunNum: number): PlaybookInstanceMonitorDetail {
        this['total_instance_run_num'] = totalInstanceRunNum;
        return this;
    }
    public set totalInstanceRunNum(totalInstanceRunNum: number  | undefined) {
        this['total_instance_run_num'] = totalInstanceRunNum;
    }
    public get totalInstanceRunNum(): number | undefined {
        return this['total_instance_run_num'];
    }
    public withScheduleInstanceRunNum(scheduleInstanceRunNum: number): PlaybookInstanceMonitorDetail {
        this['schedule_instance_run_num'] = scheduleInstanceRunNum;
        return this;
    }
    public set scheduleInstanceRunNum(scheduleInstanceRunNum: number  | undefined) {
        this['schedule_instance_run_num'] = scheduleInstanceRunNum;
    }
    public get scheduleInstanceRunNum(): number | undefined {
        return this['schedule_instance_run_num'];
    }
    public withEventInstanceRunNum(eventInstanceRunNum: number): PlaybookInstanceMonitorDetail {
        this['event_instance_run_num'] = eventInstanceRunNum;
        return this;
    }
    public set eventInstanceRunNum(eventInstanceRunNum: number  | undefined) {
        this['event_instance_run_num'] = eventInstanceRunNum;
    }
    public get eventInstanceRunNum(): number | undefined {
        return this['event_instance_run_num'];
    }
    public withAverageRunTime(averageRunTime: number): PlaybookInstanceMonitorDetail {
        this['average_run_time'] = averageRunTime;
        return this;
    }
    public set averageRunTime(averageRunTime: number  | undefined) {
        this['average_run_time'] = averageRunTime;
    }
    public get averageRunTime(): number | undefined {
        return this['average_run_time'];
    }
    public withMinRunTimeInstance(minRunTimeInstance: PlaybookInstanceRunStatistics): PlaybookInstanceMonitorDetail {
        this['min_run_time_instance'] = minRunTimeInstance;
        return this;
    }
    public set minRunTimeInstance(minRunTimeInstance: PlaybookInstanceRunStatistics  | undefined) {
        this['min_run_time_instance'] = minRunTimeInstance;
    }
    public get minRunTimeInstance(): PlaybookInstanceRunStatistics | undefined {
        return this['min_run_time_instance'];
    }
    public withMaxRunTimeInstance(maxRunTimeInstance: PlaybookInstanceRunStatistics): PlaybookInstanceMonitorDetail {
        this['max_run_time_instance'] = maxRunTimeInstance;
        return this;
    }
    public set maxRunTimeInstance(maxRunTimeInstance: PlaybookInstanceRunStatistics  | undefined) {
        this['max_run_time_instance'] = maxRunTimeInstance;
    }
    public get maxRunTimeInstance(): PlaybookInstanceRunStatistics | undefined {
        return this['max_run_time_instance'];
    }
    public withTotalInstanceNum(totalInstanceNum: number): PlaybookInstanceMonitorDetail {
        this['total_instance_num'] = totalInstanceNum;
        return this;
    }
    public set totalInstanceNum(totalInstanceNum: number  | undefined) {
        this['total_instance_num'] = totalInstanceNum;
    }
    public get totalInstanceNum(): number | undefined {
        return this['total_instance_num'];
    }
    public withSuccessInstanceNum(successInstanceNum: number): PlaybookInstanceMonitorDetail {
        this['success_instance_num'] = successInstanceNum;
        return this;
    }
    public set successInstanceNum(successInstanceNum: number  | undefined) {
        this['success_instance_num'] = successInstanceNum;
    }
    public get successInstanceNum(): number | undefined {
        return this['success_instance_num'];
    }
    public withFailInstanceNum(failInstanceNum: number): PlaybookInstanceMonitorDetail {
        this['fail_instance_num'] = failInstanceNum;
        return this;
    }
    public set failInstanceNum(failInstanceNum: number  | undefined) {
        this['fail_instance_num'] = failInstanceNum;
    }
    public get failInstanceNum(): number | undefined {
        return this['fail_instance_num'];
    }
    public withTerminateInstanceNum(terminateInstanceNum: number): PlaybookInstanceMonitorDetail {
        this['terminate_instance_num'] = terminateInstanceNum;
        return this;
    }
    public set terminateInstanceNum(terminateInstanceNum: number  | undefined) {
        this['terminate_instance_num'] = terminateInstanceNum;
    }
    public get terminateInstanceNum(): number | undefined {
        return this['terminate_instance_num'];
    }
    public withRunningInstanceNum(runningInstanceNum: number): PlaybookInstanceMonitorDetail {
        this['running_instance_num'] = runningInstanceNum;
        return this;
    }
    public set runningInstanceNum(runningInstanceNum: number  | undefined) {
        this['running_instance_num'] = runningInstanceNum;
    }
    public get runningInstanceNum(): number | undefined {
        return this['running_instance_num'];
    }
}