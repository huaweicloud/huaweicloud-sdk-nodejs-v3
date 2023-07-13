

export class StatisticUserDataItem {
    public time?: string;
    public userLoginCount?: string;
    public userPCLoginCount?: string;
    public userMobileLoginCount?: string;
    public userActivatedCount?: string;
    public userLoginDevicesName?: string;
    public userLoginDevicesCount?: string;
    public constructor() { 
    }
    public withTime(time: string): StatisticUserDataItem {
        this['time'] = time;
        return this;
    }
    public withUserLoginCount(userLoginCount: string): StatisticUserDataItem {
        this['userLoginCount'] = userLoginCount;
        return this;
    }
    public withUserPCLoginCount(userPCLoginCount: string): StatisticUserDataItem {
        this['userPCLoginCount'] = userPCLoginCount;
        return this;
    }
    public withUserMobileLoginCount(userMobileLoginCount: string): StatisticUserDataItem {
        this['userMobileLoginCount'] = userMobileLoginCount;
        return this;
    }
    public withUserActivatedCount(userActivatedCount: string): StatisticUserDataItem {
        this['userActivatedCount'] = userActivatedCount;
        return this;
    }
    public withUserLoginDevicesName(userLoginDevicesName: string): StatisticUserDataItem {
        this['userLoginDevicesName'] = userLoginDevicesName;
        return this;
    }
    public withUserLoginDevicesCount(userLoginDevicesCount: string): StatisticUserDataItem {
        this['userLoginDevicesCount'] = userLoginDevicesCount;
        return this;
    }
}