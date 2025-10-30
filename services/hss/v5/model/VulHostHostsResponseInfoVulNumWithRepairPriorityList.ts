

export class VulHostHostsResponseInfoVulNumWithRepairPriorityList {
    private 'repair_priority'?: string;
    private 'vul_num'?: number;
    public constructor() { 
    }
    public withRepairPriority(repairPriority: string): VulHostHostsResponseInfoVulNumWithRepairPriorityList {
        this['repair_priority'] = repairPriority;
        return this;
    }
    public set repairPriority(repairPriority: string  | undefined) {
        this['repair_priority'] = repairPriority;
    }
    public get repairPriority(): string | undefined {
        return this['repair_priority'];
    }
    public withVulNum(vulNum: number): VulHostHostsResponseInfoVulNumWithRepairPriorityList {
        this['vul_num'] = vulNum;
        return this;
    }
    public set vulNum(vulNum: number  | undefined) {
        this['vul_num'] = vulNum;
    }
    public get vulNum(): number | undefined {
        return this['vul_num'];
    }
}