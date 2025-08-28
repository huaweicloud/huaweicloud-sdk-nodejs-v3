
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstructionResponse extends SdkResponse {
    private 'instruction_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withInstructionId(instructionId: string): CreateInstructionResponse {
        this['instruction_id'] = instructionId;
        return this;
    }
    public set instructionId(instructionId: string  | undefined) {
        this['instruction_id'] = instructionId;
    }
    public get instructionId(): string | undefined {
        return this['instruction_id'];
    }
    public withXRequestId(xRequestId: string): CreateInstructionResponse {
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