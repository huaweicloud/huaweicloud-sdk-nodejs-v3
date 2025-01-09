

export class ListUsedDesktopInfoReq {
    private 'desktop_ids'?: Array<string>;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'group_by_type'?: ListUsedDesktopInfoReqGroupByTypeEnum | string;
    private 'desktop_username'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withDesktopIds(desktopIds: Array<string>): ListUsedDesktopInfoReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withStartTime(startTime: string): ListUsedDesktopInfoReq {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListUsedDesktopInfoReq {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withGroupByType(groupByType: ListUsedDesktopInfoReqGroupByTypeEnum | string): ListUsedDesktopInfoReq {
        this['group_by_type'] = groupByType;
        return this;
    }
    public set groupByType(groupByType: ListUsedDesktopInfoReqGroupByTypeEnum | string  | undefined) {
        this['group_by_type'] = groupByType;
    }
    public get groupByType(): ListUsedDesktopInfoReqGroupByTypeEnum | string | undefined {
        return this['group_by_type'];
    }
    public withDesktopUsername(desktopUsername: string): ListUsedDesktopInfoReq {
        this['desktop_username'] = desktopUsername;
        return this;
    }
    public set desktopUsername(desktopUsername: string  | undefined) {
        this['desktop_username'] = desktopUsername;
    }
    public get desktopUsername(): string | undefined {
        return this['desktop_username'];
    }
    public withOffset(offset: number): ListUsedDesktopInfoReq {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListUsedDesktopInfoReq {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListUsedDesktopInfoReqGroupByTypeEnum {
    DAY = 'DAY',
    HOUR = 'HOUR'
}
