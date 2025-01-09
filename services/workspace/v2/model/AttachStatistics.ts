

export class AttachStatistics {
    private 'attached_num'?: number;
    private 'unattached_num'?: number;
    private 'attaching_num'?: number;
    private 'attach_error_num'?: number;
    public constructor() { 
    }
    public withAttachedNum(attachedNum: number): AttachStatistics {
        this['attached_num'] = attachedNum;
        return this;
    }
    public set attachedNum(attachedNum: number  | undefined) {
        this['attached_num'] = attachedNum;
    }
    public get attachedNum(): number | undefined {
        return this['attached_num'];
    }
    public withUnattachedNum(unattachedNum: number): AttachStatistics {
        this['unattached_num'] = unattachedNum;
        return this;
    }
    public set unattachedNum(unattachedNum: number  | undefined) {
        this['unattached_num'] = unattachedNum;
    }
    public get unattachedNum(): number | undefined {
        return this['unattached_num'];
    }
    public withAttachingNum(attachingNum: number): AttachStatistics {
        this['attaching_num'] = attachingNum;
        return this;
    }
    public set attachingNum(attachingNum: number  | undefined) {
        this['attaching_num'] = attachingNum;
    }
    public get attachingNum(): number | undefined {
        return this['attaching_num'];
    }
    public withAttachErrorNum(attachErrorNum: number): AttachStatistics {
        this['attach_error_num'] = attachErrorNum;
        return this;
    }
    public set attachErrorNum(attachErrorNum: number  | undefined) {
        this['attach_error_num'] = attachErrorNum;
    }
    public get attachErrorNum(): number | undefined {
        return this['attach_error_num'];
    }
}