import { LogList } from './LogList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLogBackupResponse extends SdkResponse {
    public logList?: Array<LogList>;
    public type?: string;
    public constructor() { 
        super();
    }
    public withLogList(logList: Array<LogList>): ShowLogBackupResponse {
        this['logList'] = logList;
        return this;
    }
    public withType(type: string): ShowLogBackupResponse {
        this['type'] = type;
        return this;
    }
}