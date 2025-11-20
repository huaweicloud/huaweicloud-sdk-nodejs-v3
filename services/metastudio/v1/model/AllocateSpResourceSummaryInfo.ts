

export class AllocateSpResourceSummaryInfo {
    private 'resource_spec_code'?: string;
    private 'resource_num'?: number;
    private 'resource_used_num'?: number;
    private 'resource_remind_quota'?: number;
    public constructor() { 
    }
    public withResourceSpecCode(resourceSpecCode: string): AllocateSpResourceSummaryInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withResourceNum(resourceNum: number): AllocateSpResourceSummaryInfo {
        this['resource_num'] = resourceNum;
        return this;
    }
    public set resourceNum(resourceNum: number  | undefined) {
        this['resource_num'] = resourceNum;
    }
    public get resourceNum(): number | undefined {
        return this['resource_num'];
    }
    public withResourceUsedNum(resourceUsedNum: number): AllocateSpResourceSummaryInfo {
        this['resource_used_num'] = resourceUsedNum;
        return this;
    }
    public set resourceUsedNum(resourceUsedNum: number  | undefined) {
        this['resource_used_num'] = resourceUsedNum;
    }
    public get resourceUsedNum(): number | undefined {
        return this['resource_used_num'];
    }
    public withResourceRemindQuota(resourceRemindQuota: number): AllocateSpResourceSummaryInfo {
        this['resource_remind_quota'] = resourceRemindQuota;
        return this;
    }
    public set resourceRemindQuota(resourceRemindQuota: number  | undefined) {
        this['resource_remind_quota'] = resourceRemindQuota;
    }
    public get resourceRemindQuota(): number | undefined {
        return this['resource_remind_quota'];
    }
}