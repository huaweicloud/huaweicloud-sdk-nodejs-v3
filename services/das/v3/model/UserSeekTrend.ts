

export class UserSeekTrend {
    private 'last_day_user_seek_count'?: number;
    private 'last_week_user_seek_count'?: number;
    private 'last_two_week_user_seek_count'?: number;
    private 'last_month_user_seek_count'?: number;
    public constructor() { 
    }
    public withLastDayUserSeekCount(lastDayUserSeekCount: number): UserSeekTrend {
        this['last_day_user_seek_count'] = lastDayUserSeekCount;
        return this;
    }
    public set lastDayUserSeekCount(lastDayUserSeekCount: number  | undefined) {
        this['last_day_user_seek_count'] = lastDayUserSeekCount;
    }
    public get lastDayUserSeekCount(): number | undefined {
        return this['last_day_user_seek_count'];
    }
    public withLastWeekUserSeekCount(lastWeekUserSeekCount: number): UserSeekTrend {
        this['last_week_user_seek_count'] = lastWeekUserSeekCount;
        return this;
    }
    public set lastWeekUserSeekCount(lastWeekUserSeekCount: number  | undefined) {
        this['last_week_user_seek_count'] = lastWeekUserSeekCount;
    }
    public get lastWeekUserSeekCount(): number | undefined {
        return this['last_week_user_seek_count'];
    }
    public withLastTwoWeekUserSeekCount(lastTwoWeekUserSeekCount: number): UserSeekTrend {
        this['last_two_week_user_seek_count'] = lastTwoWeekUserSeekCount;
        return this;
    }
    public set lastTwoWeekUserSeekCount(lastTwoWeekUserSeekCount: number  | undefined) {
        this['last_two_week_user_seek_count'] = lastTwoWeekUserSeekCount;
    }
    public get lastTwoWeekUserSeekCount(): number | undefined {
        return this['last_two_week_user_seek_count'];
    }
    public withLastMonthUserSeekCount(lastMonthUserSeekCount: number): UserSeekTrend {
        this['last_month_user_seek_count'] = lastMonthUserSeekCount;
        return this;
    }
    public set lastMonthUserSeekCount(lastMonthUserSeekCount: number  | undefined) {
        this['last_month_user_seek_count'] = lastMonthUserSeekCount;
    }
    public get lastMonthUserSeekCount(): number | undefined {
        return this['last_month_user_seek_count'];
    }
}