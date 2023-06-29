import { DelAttendInfo } from './DelAttendInfo';


export class RestBulkDelAttendReqBody {
    public bulkDelAttendInfo: Array<DelAttendInfo>;
    public constructor(bulkDelAttendInfo?: any) { 
        this['bulkDelAttendInfo'] = bulkDelAttendInfo;
    }
    public withBulkDelAttendInfo(bulkDelAttendInfo: Array<DelAttendInfo>): RestBulkDelAttendReqBody {
        this['bulkDelAttendInfo'] = bulkDelAttendInfo;
        return this;
    }
}