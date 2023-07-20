import { IntegerRange } from './IntegerRange';
import { ScheduledPolicy } from './ScheduledPolicy';


export class CreateScheduledTaskOption {
    public name?: string;
    private 'scheduled_policy'?: ScheduledPolicy;
    private 'instance_number'?: IntegerRange;
    public constructor(name?: string, scheduledPolicy?: ScheduledPolicy, instanceNumber?: IntegerRange) { 
        this['name'] = name;
        this['scheduled_policy'] = scheduledPolicy;
        this['instance_number'] = instanceNumber;
    }
    public withName(name: string): CreateScheduledTaskOption {
        this['name'] = name;
        return this;
    }
    public withScheduledPolicy(scheduledPolicy: ScheduledPolicy): CreateScheduledTaskOption {
        this['scheduled_policy'] = scheduledPolicy;
        return this;
    }
    public set scheduledPolicy(scheduledPolicy: ScheduledPolicy  | undefined) {
        this['scheduled_policy'] = scheduledPolicy;
    }
    public get scheduledPolicy(): ScheduledPolicy | undefined {
        return this['scheduled_policy'];
    }
    public withInstanceNumber(instanceNumber: IntegerRange): CreateScheduledTaskOption {
        this['instance_number'] = instanceNumber;
        return this;
    }
    public set instanceNumber(instanceNumber: IntegerRange  | undefined) {
        this['instance_number'] = instanceNumber;
    }
    public get instanceNumber(): IntegerRange | undefined {
        return this['instance_number'];
    }
}