
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CopyVideoScriptsResponse extends SdkResponse {
    private 'script_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withScriptId(scriptId: string): CopyVideoScriptsResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withXRequestId(xRequestId: string): CopyVideoScriptsResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}