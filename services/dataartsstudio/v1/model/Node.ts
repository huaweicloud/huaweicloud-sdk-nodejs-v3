import { Condition } from './Condition';
import { Cron } from './Cron';
import { Event } from './Event';
import { Location } from './Location';
import { Property } from './Property';


export class Node {
    public name?: string;
    public type?: NodeTypeEnum | string;
    public location?: Location;
    private 'pre_node_names'?: Array<string>;
    public conditions?: Array<Condition>;
    public properties?: Array<Property>;
    private 'polling_interval'?: number;
    private 'exec_time_out_retry'?: string;
    private 'max_execution_time'?: number;
    private 'retry_times'?: number;
    private 'retry_interval'?: number;
    private 'fail_policy'?: NodeFailPolicyEnum | string;
    private 'event_trigger'?: Event;
    private 'cron_trigger'?: Cron;
    public constructor(name?: string, type?: string, location?: Location, properties?: Array<Property>) { 
        this['name'] = name;
        this['type'] = type;
        this['location'] = location;
        this['properties'] = properties;
    }
    public withName(name: string): Node {
        this['name'] = name;
        return this;
    }
    public withType(type: NodeTypeEnum | string): Node {
        this['type'] = type;
        return this;
    }
    public withLocation(location: Location): Node {
        this['location'] = location;
        return this;
    }
    public withPreNodeNames(preNodeNames: Array<string>): Node {
        this['pre_node_names'] = preNodeNames;
        return this;
    }
    public set preNodeNames(preNodeNames: Array<string>  | undefined) {
        this['pre_node_names'] = preNodeNames;
    }
    public get preNodeNames(): Array<string> | undefined {
        return this['pre_node_names'];
    }
    public withConditions(conditions: Array<Condition>): Node {
        this['conditions'] = conditions;
        return this;
    }
    public withProperties(properties: Array<Property>): Node {
        this['properties'] = properties;
        return this;
    }
    public withPollingInterval(pollingInterval: number): Node {
        this['polling_interval'] = pollingInterval;
        return this;
    }
    public set pollingInterval(pollingInterval: number  | undefined) {
        this['polling_interval'] = pollingInterval;
    }
    public get pollingInterval(): number | undefined {
        return this['polling_interval'];
    }
    public withExecTimeOutRetry(execTimeOutRetry: string): Node {
        this['exec_time_out_retry'] = execTimeOutRetry;
        return this;
    }
    public set execTimeOutRetry(execTimeOutRetry: string  | undefined) {
        this['exec_time_out_retry'] = execTimeOutRetry;
    }
    public get execTimeOutRetry(): string | undefined {
        return this['exec_time_out_retry'];
    }
    public withMaxExecutionTime(maxExecutionTime: number): Node {
        this['max_execution_time'] = maxExecutionTime;
        return this;
    }
    public set maxExecutionTime(maxExecutionTime: number  | undefined) {
        this['max_execution_time'] = maxExecutionTime;
    }
    public get maxExecutionTime(): number | undefined {
        return this['max_execution_time'];
    }
    public withRetryTimes(retryTimes: number): Node {
        this['retry_times'] = retryTimes;
        return this;
    }
    public set retryTimes(retryTimes: number  | undefined) {
        this['retry_times'] = retryTimes;
    }
    public get retryTimes(): number | undefined {
        return this['retry_times'];
    }
    public withRetryInterval(retryInterval: number): Node {
        this['retry_interval'] = retryInterval;
        return this;
    }
    public set retryInterval(retryInterval: number  | undefined) {
        this['retry_interval'] = retryInterval;
    }
    public get retryInterval(): number | undefined {
        return this['retry_interval'];
    }
    public withFailPolicy(failPolicy: NodeFailPolicyEnum | string): Node {
        this['fail_policy'] = failPolicy;
        return this;
    }
    public set failPolicy(failPolicy: NodeFailPolicyEnum | string  | undefined) {
        this['fail_policy'] = failPolicy;
    }
    public get failPolicy(): NodeFailPolicyEnum | string | undefined {
        return this['fail_policy'];
    }
    public withEventTrigger(eventTrigger: Event): Node {
        this['event_trigger'] = eventTrigger;
        return this;
    }
    public set eventTrigger(eventTrigger: Event  | undefined) {
        this['event_trigger'] = eventTrigger;
    }
    public get eventTrigger(): Event | undefined {
        return this['event_trigger'];
    }
    public withCronTrigger(cronTrigger: Cron): Node {
        this['cron_trigger'] = cronTrigger;
        return this;
    }
    public set cronTrigger(cronTrigger: Cron  | undefined) {
        this['cron_trigger'] = cronTrigger;
    }
    public get cronTrigger(): Cron | undefined {
        return this['cron_trigger'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeTypeEnum {
    HIVESQL = 'HiveSQL',
    SPARKSQL = 'SparkSQL',
    DWSSQL = 'DWSSQL',
    DLISQL = 'DLISQL',
    RDSSQL = 'RDSSQL',
    SHELL = 'Shell',
    PYTHON = 'Python',
    DISTRANSFERTASK = 'DISTransferTask',
    CDMJOB = 'CDMJob',
    OBSMANAGER = 'OBSManager',
    DUMMY = 'Dummy',
    RESTAPI = 'RESTAPI',
    DLISPARK = 'DLISpark',
    SMN = 'SMN',
    MRSSPARK = 'MRSSpark',
    MAPREDUCE = 'MapReduce',
    MRSFLINK = 'MRSFlink',
    MRSHETUENGINE = 'MRSHetuEngine'
}
/**
    * @export
    * @enum {string}
    */
export enum NodeFailPolicyEnum {
    FAIL = 'FAIL',
    IGNORE = 'IGNORE',
    SUSPEND = 'SUSPEND',
    FAIL_CHILD = 'FAIL_CHILD'
}
