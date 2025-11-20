

export class AllocateSpResourceInfo {
    private 'assignment_record_id'?: string;
    private 'resource_spec_code'?: string;
    private 'charging_mode'?: string;
    private 'resource_num'?: number;
    private 'resource_used_num'?: number;
    private 'resource_allocate_time'?: number;
    private 'resource_expire_time'?: number;
    public constructor() { 
    }
    public withAssignmentRecordId(assignmentRecordId: string): AllocateSpResourceInfo {
        this['assignment_record_id'] = assignmentRecordId;
        return this;
    }
    public set assignmentRecordId(assignmentRecordId: string  | undefined) {
        this['assignment_record_id'] = assignmentRecordId;
    }
    public get assignmentRecordId(): string | undefined {
        return this['assignment_record_id'];
    }
    public withResourceSpecCode(resourceSpecCode: string): AllocateSpResourceInfo {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withChargingMode(chargingMode: string): AllocateSpResourceInfo {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withResourceNum(resourceNum: number): AllocateSpResourceInfo {
        this['resource_num'] = resourceNum;
        return this;
    }
    public set resourceNum(resourceNum: number  | undefined) {
        this['resource_num'] = resourceNum;
    }
    public get resourceNum(): number | undefined {
        return this['resource_num'];
    }
    public withResourceUsedNum(resourceUsedNum: number): AllocateSpResourceInfo {
        this['resource_used_num'] = resourceUsedNum;
        return this;
    }
    public set resourceUsedNum(resourceUsedNum: number  | undefined) {
        this['resource_used_num'] = resourceUsedNum;
    }
    public get resourceUsedNum(): number | undefined {
        return this['resource_used_num'];
    }
    public withResourceAllocateTime(resourceAllocateTime: number): AllocateSpResourceInfo {
        this['resource_allocate_time'] = resourceAllocateTime;
        return this;
    }
    public set resourceAllocateTime(resourceAllocateTime: number  | undefined) {
        this['resource_allocate_time'] = resourceAllocateTime;
    }
    public get resourceAllocateTime(): number | undefined {
        return this['resource_allocate_time'];
    }
    public withResourceExpireTime(resourceExpireTime: number): AllocateSpResourceInfo {
        this['resource_expire_time'] = resourceExpireTime;
        return this;
    }
    public set resourceExpireTime(resourceExpireTime: number  | undefined) {
        this['resource_expire_time'] = resourceExpireTime;
    }
    public get resourceExpireTime(): number | undefined {
        return this['resource_expire_time'];
    }
}