import { LogsTreeList } from './LogsTreeList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubfilesResponse extends SdkResponse {
    public error?: Error;
    public result?: LogsTreeList;
    public status?: string;
    public constructor() { 
        super();
    }
    public withError(error: Error): ListSubfilesResponse {
        this['error'] = error;
        return this;
    }
    public withResult(result: LogsTreeList): ListSubfilesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListSubfilesResponse {
        this['status'] = status;
        return this;
    }
}