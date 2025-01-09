import { PageResp } from './PageResp';
import { ScriptRecordSimpleInfo } from './ScriptRecordSimpleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScriptRecordsResponse extends SdkResponse {
    public count?: number;
    private 'script_records'?: Array<ScriptRecordSimpleInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListScriptRecordsResponse {
        this['count'] = count;
        return this;
    }
    public withScriptRecords(scriptRecords: Array<ScriptRecordSimpleInfo>): ListScriptRecordsResponse {
        this['script_records'] = scriptRecords;
        return this;
    }
    public set scriptRecords(scriptRecords: Array<ScriptRecordSimpleInfo>  | undefined) {
        this['script_records'] = scriptRecords;
    }
    public get scriptRecords(): Array<ScriptRecordSimpleInfo> | undefined {
        return this['script_records'];
    }
}