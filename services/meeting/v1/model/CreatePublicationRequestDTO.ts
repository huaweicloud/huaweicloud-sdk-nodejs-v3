import { PublicationRequestBase } from './PublicationRequestBase';


export class CreatePublicationRequestDTO {
    public publishName?: string;
    public startTime?: number;
    public endTime?: number;
    public deptList?: Array<string>;
    public deviceList?: Array<string>;
    public programList?: Array<string>;
    public constructor(publishName?: string, startTime?: number, endTime?: number, deptList?: Array<string>, deviceList?: Array<string>) { 
        this['publishName'] = publishName;
        this['startTime'] = startTime;
        this['endTime'] = endTime;
        this['deptList'] = deptList;
        this['deviceList'] = deviceList;
    }
    public withPublishName(publishName: string): CreatePublicationRequestDTO {
        this['publishName'] = publishName;
        return this;
    }
    public withStartTime(startTime: number): CreatePublicationRequestDTO {
        this['startTime'] = startTime;
        return this;
    }
    public withEndTime(endTime: number): CreatePublicationRequestDTO {
        this['endTime'] = endTime;
        return this;
    }
    public withDeptList(deptList: Array<string>): CreatePublicationRequestDTO {
        this['deptList'] = deptList;
        return this;
    }
    public withDeviceList(deviceList: Array<string>): CreatePublicationRequestDTO {
        this['deviceList'] = deviceList;
        return this;
    }
    public withProgramList(programList: Array<string>): CreatePublicationRequestDTO {
        this['programList'] = programList;
        return this;
    }
}