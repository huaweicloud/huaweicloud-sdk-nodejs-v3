

export class DependJob {
    public jobs?: Array<string>;
    private 'depend_period'?: DependJobDependPeriodEnum | string;
    private 'depend_fail_policy'?: DependJobDependFailPolicyEnum | string;
    public constructor(jobs?: Array<string>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): DependJob {
        this['jobs'] = jobs;
        return this;
    }
    public withDependPeriod(dependPeriod: DependJobDependPeriodEnum | string): DependJob {
        this['depend_period'] = dependPeriod;
        return this;
    }
    public set dependPeriod(dependPeriod: DependJobDependPeriodEnum | string  | undefined) {
        this['depend_period'] = dependPeriod;
    }
    public get dependPeriod(): DependJobDependPeriodEnum | string | undefined {
        return this['depend_period'];
    }
    public withDependFailPolicy(dependFailPolicy: DependJobDependFailPolicyEnum | string): DependJob {
        this['depend_fail_policy'] = dependFailPolicy;
        return this;
    }
    public set dependFailPolicy(dependFailPolicy: DependJobDependFailPolicyEnum | string  | undefined) {
        this['depend_fail_policy'] = dependFailPolicy;
    }
    public get dependFailPolicy(): DependJobDependFailPolicyEnum | string | undefined {
        return this['depend_fail_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DependJobDependPeriodEnum {
    SAME_PERIOD = 'SAME_PERIOD',
    PRE_PERIOD = 'PRE_PERIOD'
}
/**
    * @export
    * @enum {string}
    */
export enum DependJobDependFailPolicyEnum {
    FAIL = 'FAIL',
    IGNORE = 'IGNORE',
    SUSPEND = 'SUSPEND'
}
