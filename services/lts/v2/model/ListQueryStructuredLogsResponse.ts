import { StructLogContents } from './StructLogContents';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQueryStructuredLogsResponse extends SdkResponse {
    private 'struct_logs'?: Array<StructLogContents> | undefined;
    public constructor() { 
        super();
    }
    public withStructLogs(structLogs: Array<StructLogContents>): ListQueryStructuredLogsResponse {
        this['struct_logs'] = structLogs;
        return this;
    }
    public set structLogs(structLogs: Array<StructLogContents> | undefined) {
        this['struct_logs'] = structLogs;
    }
    public get structLogs() {
        return this['struct_logs'];
    }
}