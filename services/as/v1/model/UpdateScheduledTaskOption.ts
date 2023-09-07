import { IntegerRange } from './IntegerRange';
import { ScheduledTaskPolicy } from './ScheduledTaskPolicy';


export class UpdateScheduledTaskOption {
    public name?: string;
    private 'scheduled_policy'?: ScheduledTaskPolicy;
    private 'instance_number'?: IntegerRange;
    public constructor() { 
    }
    public withName(name: string): UpdateScheduledTaskOption {
        this['name'] = name;
        return this;
    }
    public withScheduledPolicy(scheduledPolicy: ScheduledTaskPolicy): UpdateScheduledTaskOption {
        this['scheduled_policy'] = scheduledPolicy;
        return this;
    }
    public set scheduledPolicy(scheduledPolicy: ScheduledTaskPolicy  | undefined) {
        this['scheduled_policy'] = scheduledPolicy;
    }
    public get scheduledPolicy(): ScheduledTaskPolicy | undefined {
        return this['scheduled_policy'];
    }
    public withInstanceNumber(instanceNumber: IntegerRange): UpdateScheduledTaskOption {
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