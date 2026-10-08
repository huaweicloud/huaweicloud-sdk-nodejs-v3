
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowServerConsoleOutputResponse extends SdkResponse {
    public output?: string;
    public constructor() { 
        super();
    }
    public withOutput(output: string): ShowServerConsoleOutputResponse {
        this['output'] = output;
        return this;
    }
}