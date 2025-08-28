
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateInstructionLibraryResponse extends SdkResponse {
    private 'instruction_library_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withInstructionLibraryId(instructionLibraryId: string): CreateInstructionLibraryResponse {
        this['instruction_library_id'] = instructionLibraryId;
        return this;
    }
    public set instructionLibraryId(instructionLibraryId: string  | undefined) {
        this['instruction_library_id'] = instructionLibraryId;
    }
    public get instructionLibraryId(): string | undefined {
        return this['instruction_library_id'];
    }
    public withXRequestId(xRequestId: string): CreateInstructionLibraryResponse {
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