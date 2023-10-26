import { Counter } from './Counter';


export class Counters {
    private 'org.apache.sqoop.submission.counter.SqoopCounters'?: Counter;
    public constructor(orgApacheSqoopSubmissionCounterSqoopCounters?: Counter) { 
        this['org.apache.sqoop.submission.counter.SqoopCounters'] = orgApacheSqoopSubmissionCounterSqoopCounters;
    }
    public withOrgApacheSqoopSubmissionCounterSqoopCounters(orgApacheSqoopSubmissionCounterSqoopCounters: Counter): Counters {
        this['org.apache.sqoop.submission.counter.SqoopCounters'] = orgApacheSqoopSubmissionCounterSqoopCounters;
        return this;
    }
    public set orgApacheSqoopSubmissionCounterSqoopCounters(orgApacheSqoopSubmissionCounterSqoopCounters: Counter  | undefined) {
        this['org.apache.sqoop.submission.counter.SqoopCounters'] = orgApacheSqoopSubmissionCounterSqoopCounters;
    }
    public get orgApacheSqoopSubmissionCounterSqoopCounters(): Counter | undefined {
        return this['org.apache.sqoop.submission.counter.SqoopCounters'];
    }
}