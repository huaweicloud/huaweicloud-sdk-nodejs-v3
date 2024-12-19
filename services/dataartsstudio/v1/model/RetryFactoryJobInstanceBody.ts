import { RetryFactoryJobInstanceBodyJobs } from './RetryFactoryJobInstanceBodyJobs';
import { RetryFactoryJobInstanceBodyTaskRetrys } from './RetryFactoryJobInstanceBodyTaskRetrys';


export class RetryFactoryJobInstanceBody {
    private 'retry_location'?: string;
    private 'node_name'?: string;
    private 'retry_task_version'?: string;
    private 'ignore_obs_monitor'?: boolean;
    private 'task_retrys'?: Array<RetryFactoryJobInstanceBodyTaskRetrys>;
    private 'begin_time'?: number;
    private 'end_time'?: number;
    public jobs?: Array<RetryFactoryJobInstanceBodyJobs>;
    public concurrent?: number;
    public constructor(retryLocation?: string, retryTaskVersion?: string) { 
        this['retry_location'] = retryLocation;
        this['retry_task_version'] = retryTaskVersion;
    }
    public withRetryLocation(retryLocation: string): RetryFactoryJobInstanceBody {
        this['retry_location'] = retryLocation;
        return this;
    }
    public set retryLocation(retryLocation: string  | undefined) {
        this['retry_location'] = retryLocation;
    }
    public get retryLocation(): string | undefined {
        return this['retry_location'];
    }
    public withNodeName(nodeName: string): RetryFactoryJobInstanceBody {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withRetryTaskVersion(retryTaskVersion: string): RetryFactoryJobInstanceBody {
        this['retry_task_version'] = retryTaskVersion;
        return this;
    }
    public set retryTaskVersion(retryTaskVersion: string  | undefined) {
        this['retry_task_version'] = retryTaskVersion;
    }
    public get retryTaskVersion(): string | undefined {
        return this['retry_task_version'];
    }
    public withIgnoreObsMonitor(ignoreObsMonitor: boolean): RetryFactoryJobInstanceBody {
        this['ignore_obs_monitor'] = ignoreObsMonitor;
        return this;
    }
    public set ignoreObsMonitor(ignoreObsMonitor: boolean  | undefined) {
        this['ignore_obs_monitor'] = ignoreObsMonitor;
    }
    public get ignoreObsMonitor(): boolean | undefined {
        return this['ignore_obs_monitor'];
    }
    public withTaskRetrys(taskRetrys: Array<RetryFactoryJobInstanceBodyTaskRetrys>): RetryFactoryJobInstanceBody {
        this['task_retrys'] = taskRetrys;
        return this;
    }
    public set taskRetrys(taskRetrys: Array<RetryFactoryJobInstanceBodyTaskRetrys>  | undefined) {
        this['task_retrys'] = taskRetrys;
    }
    public get taskRetrys(): Array<RetryFactoryJobInstanceBodyTaskRetrys> | undefined {
        return this['task_retrys'];
    }
    public withBeginTime(beginTime: number): RetryFactoryJobInstanceBody {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: number): RetryFactoryJobInstanceBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withJobs(jobs: Array<RetryFactoryJobInstanceBodyJobs>): RetryFactoryJobInstanceBody {
        this['jobs'] = jobs;
        return this;
    }
    public withConcurrent(concurrent: number): RetryFactoryJobInstanceBody {
        this['concurrent'] = concurrent;
        return this;
    }
}