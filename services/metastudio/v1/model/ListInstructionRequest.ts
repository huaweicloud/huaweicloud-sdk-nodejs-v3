

export class ListInstructionRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    private 'instruction_library_id'?: string;
    public name?: string;
    public constructor(instructionLibraryId?: string) { 
        this['instruction_library_id'] = instructionLibraryId;
    }
    public withAuthorization(authorization: string): ListInstructionRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListInstructionRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListInstructionRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListInstructionRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListInstructionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstructionRequest {
        this['limit'] = limit;
        return this;
    }
    public withInstructionLibraryId(instructionLibraryId: string): ListInstructionRequest {
        this['instruction_library_id'] = instructionLibraryId;
        return this;
    }
    public set instructionLibraryId(instructionLibraryId: string  | undefined) {
        this['instruction_library_id'] = instructionLibraryId;
    }
    public get instructionLibraryId(): string | undefined {
        return this['instruction_library_id'];
    }
    public withName(name: string): ListInstructionRequest {
        this['name'] = name;
        return this;
    }
}