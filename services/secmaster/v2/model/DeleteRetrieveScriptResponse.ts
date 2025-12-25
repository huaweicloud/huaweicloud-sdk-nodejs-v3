
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRetrieveScriptResponse extends SdkResponse {
    private 'script_id'?: string;
    private 'delete_time'?: number;
    public constructor() { 
        super();
    }
    public withScriptId(scriptId: string): DeleteRetrieveScriptResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withDeleteTime(deleteTime: number): DeleteRetrieveScriptResponse {
        this['delete_time'] = deleteTime;
        return this;
    }
    public set deleteTime(deleteTime: number  | undefined) {
        this['delete_time'] = deleteTime;
    }
    public get deleteTime(): number | undefined {
        return this['delete_time'];
    }
}