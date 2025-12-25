

export class PlaybookInstanceRunStatistics {
    private 'playbook_instance_id'?: string;
    private 'playbook_instance_name'?: string;
    private 'playbook_instance_run_time'?: number;
    public constructor() { 
    }
    public withPlaybookInstanceId(playbookInstanceId: string): PlaybookInstanceRunStatistics {
        this['playbook_instance_id'] = playbookInstanceId;
        return this;
    }
    public set playbookInstanceId(playbookInstanceId: string  | undefined) {
        this['playbook_instance_id'] = playbookInstanceId;
    }
    public get playbookInstanceId(): string | undefined {
        return this['playbook_instance_id'];
    }
    public withPlaybookInstanceName(playbookInstanceName: string): PlaybookInstanceRunStatistics {
        this['playbook_instance_name'] = playbookInstanceName;
        return this;
    }
    public set playbookInstanceName(playbookInstanceName: string  | undefined) {
        this['playbook_instance_name'] = playbookInstanceName;
    }
    public get playbookInstanceName(): string | undefined {
        return this['playbook_instance_name'];
    }
    public withPlaybookInstanceRunTime(playbookInstanceRunTime: number): PlaybookInstanceRunStatistics {
        this['playbook_instance_run_time'] = playbookInstanceRunTime;
        return this;
    }
    public set playbookInstanceRunTime(playbookInstanceRunTime: number  | undefined) {
        this['playbook_instance_run_time'] = playbookInstanceRunTime;
    }
    public get playbookInstanceRunTime(): number | undefined {
        return this['playbook_instance_run_time'];
    }
}