

export class RepairPriorityListInfo {
    private 'repair_priority'?: string;
    private 'host_num'?: number;
    public constructor() { 
    }
    public withRepairPriority(repairPriority: string): RepairPriorityListInfo {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
    public withHostNum(hostNum: number): RepairPriorityListInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
}