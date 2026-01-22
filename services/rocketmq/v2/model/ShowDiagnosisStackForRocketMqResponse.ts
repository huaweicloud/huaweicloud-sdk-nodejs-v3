
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiagnosisStackForRocketMqResponse extends SdkResponse {
    private 'thread_name'?: string;
    public stack?: string;
    public constructor() { 
        super();
    }
    public withThreadName(threadName: string): ShowDiagnosisStackForRocketMqResponse {
        this['thread_name'] = threadName;
        return this;
    }
    public set threadName(threadName: string  | undefined) {
        this['thread_name'] = threadName;
    }
    public get threadName(): string | undefined {
        return this['thread_name'];
    }
    public withStack(stack: string): ShowDiagnosisStackForRocketMqResponse {
        this['stack'] = stack;
        return this;
    }
}