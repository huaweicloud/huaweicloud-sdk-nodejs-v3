

export class ActionSubItemVo {
    public status?: string;
    public detail?: string;
    private 'sub_item_name'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'estimated_time'?: number;
    public constructor() { 
    }
    public withStatus(status: string): ActionSubItemVo {
        this['status'] = status;
        return this;
    }
    public withDetail(detail: string): ActionSubItemVo {
        this['detail'] = detail;
        return this;
    }
    public withSubItemName(subItemName: string): ActionSubItemVo {
        this['sub_item_name'] = subItemName;
        return this;
    }
    public set subItemName(subItemName: string  | undefined) {
        this['sub_item_name'] = subItemName;
    }
    public get subItemName(): string | undefined {
        return this['sub_item_name'];
    }
    public withBeginTime(beginTime: string): ActionSubItemVo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ActionSubItemVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withEstimatedTime(estimatedTime: number): ActionSubItemVo {
        this['estimated_time'] = estimatedTime;
        return this;
    }
    public set estimatedTime(estimatedTime: number  | undefined) {
        this['estimated_time'] = estimatedTime;
    }
    public get estimatedTime(): number | undefined {
        return this['estimated_time'];
    }
}