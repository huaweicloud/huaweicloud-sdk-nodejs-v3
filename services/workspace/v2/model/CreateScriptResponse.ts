
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateScriptResponse extends SdkResponse {
    private 'script_id'?: string;
    public constructor() { 
        super();
    }
    public withScriptId(scriptId: string): CreateScriptResponse {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
}