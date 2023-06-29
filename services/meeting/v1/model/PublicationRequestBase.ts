

export class PublicationRequestBase {
    public publishName: string;
    public startTime: number;
    public endTime: number;
    public deptList: Array<string>;
    public deviceList: Array<string>;
    public constructor(publishName?: any, startTime?: any, endTime?: any, deptList?: any, deviceList?: any) { 
        this['publishName'] = publishName;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['deptList'] = deptList;
        this['deviceList'] = deviceList;
    }
    public withPublishName(publishName: string): PublicationRequestBase {
        this['publishName'] = publishName;
        return this;
    }
    public withStartTime(startTime: number): PublicationRequestBase {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): PublicationRequestBase {
        this['endTime'] = endTime;
        return this;
    }
    public withDeptList(deptList: Array<string>): PublicationRequestBase {
        this['deptList'] = deptList;
        return this;
    }
    public withDeviceList(deviceList: Array<string>): PublicationRequestBase {
        this['deviceList'] = deviceList;
        return this;
    }
}