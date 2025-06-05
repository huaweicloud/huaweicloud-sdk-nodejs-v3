import { CreateDaemonsetRequestBodyScheduleInfo } from './CreateDaemonsetRequestBodyScheduleInfo';
import { RuntimeRequestBody } from './RuntimeRequestBody';


export class CreateDaemonsetRequestBody {
    private 'cluster_name'?: string;
    private 'auto_upgrade'?: boolean;
    private 'runtime_info'?: Array<RuntimeRequestBody>;
    private 'schedule_info'?: CreateDaemonsetRequestBodyScheduleInfo;
    public constructor() { 
    }
    public withClusterName(clusterName: string): CreateDaemonsetRequestBody {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withAutoUpgrade(autoUpgrade: boolean): CreateDaemonsetRequestBody {
        this['auto_upgrade'] = autoUpgrade;
        return this;
    }
    public set autoUpgrade(autoUpgrade: boolean  | undefined) {
        this['auto_upgrade'] = autoUpgrade;
    }
    public get autoUpgrade(): boolean | undefined {
        return this['auto_upgrade'];
    }
    public withRuntimeInfo(runtimeInfo: Array<RuntimeRequestBody>): CreateDaemonsetRequestBody {
        this['runtime_info'] = runtimeInfo;
        return this;
    }
    public set runtimeInfo(runtimeInfo: Array<RuntimeRequestBody>  | undefined) {
        this['runtime_info'] = runtimeInfo;
    }
    public get runtimeInfo(): Array<RuntimeRequestBody> | undefined {
        return this['runtime_info'];
    }
    public withScheduleInfo(scheduleInfo: CreateDaemonsetRequestBodyScheduleInfo): CreateDaemonsetRequestBody {
        this['schedule_info'] = scheduleInfo;
        return this;
    }
    public set scheduleInfo(scheduleInfo: CreateDaemonsetRequestBodyScheduleInfo  | undefined) {
        this['schedule_info'] = scheduleInfo;
    }
    public get scheduleInfo(): CreateDaemonsetRequestBodyScheduleInfo | undefined {
        return this['schedule_info'];
    }
}