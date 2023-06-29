import { PublicationRequestBase } from './PublicationRequestBase';


export class UpdatePublicationRequestDTO {
    public publishName: string;
    public startTime: number;
    public endTime: number;
    public deptList: Array<string>;
    public deviceList: Array<string>;
    public programList?: Array<string>;
    public constructor(publishName?: any, startTime?: any, endTime?: any, deptList?: any, deviceList?: any) { 
        this['publishName'] = publishName;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['deptList'] = deptList;
        this['deviceList'] = deviceList;
    }
    public withPublishName(publishName: string): UpdatePublicationRequestDTO {
        this['publishName'] = publishName;
        return this;
    }
    public withStartTime(startTime: number): UpdatePublicationRequestDTO {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): UpdatePublicationRequestDTO {
        this['endTime'] = endTime;
        return this;
    }
    public withDeptList(deptList: Array<string>): UpdatePublicationRequestDTO {
        this['deptList'] = deptList;
        return this;
    }
    public withDeviceList(deviceList: Array<string>): UpdatePublicationRequestDTO {
        this['deviceList'] = deviceList;
        return this;
    }
    public withProgramList(programList: Array<string>): UpdatePublicationRequestDTO {
        this['programList'] = programList;
        return this;
    }
}