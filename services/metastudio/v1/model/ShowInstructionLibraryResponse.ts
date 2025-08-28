
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstructionLibraryResponse extends SdkResponse {
    private 'instruction_library_id'?: string;
    public name?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withInstructionLibraryId(instructionLibraryId: string): ShowInstructionLibraryResponse {
        this['instruction_library_id'] = instructionLibraryId;
        return this;
    }
    public set instructionLibraryId(instructionLibraryId: string  | undefined) {
        this['instruction_library_id'] = instructionLibraryId;
    }
    public get instructionLibraryId(): string | undefined {
        return this['instruction_library_id'];
    }
    public withName(name: string): ShowInstructionLibraryResponse {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: string): ShowInstructionLibraryResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowInstructionLibraryResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): ShowInstructionLibraryResponse {
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