import { ExectuionStatistic } from './ExectuionStatistic';


export class JobScriptOrderStatisticsModel {
    private 'total_instance'?: number;
    private 'execute_statistics'?: Array<ExectuionStatistic>;
    public constructor() { 
    }
    public withTotalInstance(totalInstance: number): JobScriptOrderStatisticsModel {
        this['total_instance'] = totalInstance;
        return this;
    }
    public set totalInstance(totalInstance: number  | undefined) {
        this['total_instance'] = totalInstance;
    }
    public get totalInstance(): number | undefined {
        return this['total_instance'];
    }
    public withExecuteStatistics(executeStatistics: Array<ExectuionStatistic>): JobScriptOrderStatisticsModel {
        this['execute_statistics'] = executeStatistics;
        return this;
    }
    public set executeStatistics(executeStatistics: Array<ExectuionStatistic>  | undefined) {
        this['execute_statistics'] = executeStatistics;
    }
    public get executeStatistics(): Array<ExectuionStatistic> | undefined {
        return this['execute_statistics'];
    }
}