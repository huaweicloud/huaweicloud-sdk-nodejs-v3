
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDiagnosisStackResponse extends SdkResponse {
    private 'thread_name'?: string;
    public stack?: string;
    public constructor() { 
        super();
    }
    public withThreadName(threadName: string): ShowDiagnosisStackResponse {
        this['thread_name'] = threadName;
        return this;
    }
    public set threadName(threadName: string  | undefined) {
        this['thread_name'] = threadName;
    }
    public get threadName(): string | undefined {
        return this['thread_name'];
    }
    public withStack(stack: string): ShowDiagnosisStackResponse {
        this['stack'] = stack;
        return this;
    }
}