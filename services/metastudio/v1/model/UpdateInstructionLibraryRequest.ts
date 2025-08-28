import { UpdateInstructionLibraryReq } from './UpdateInstructionLibraryReq';


export class UpdateInstructionLibraryRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    private 'instruction_library_id'?: string;
    public body?: UpdateInstructionLibraryReq;
    public constructor(instructionLibraryId?: string) { 
        this['instruction_library_id'] = instructionLibraryId;
    }
    public withAuthorization(authorization: string): UpdateInstructionLibraryRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): UpdateInstructionLibraryRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): UpdateInstructionLibraryRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): UpdateInstructionLibraryRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withInstructionLibraryId(instructionLibraryId: string): UpdateInstructionLibraryRequest {
        this['instruction_library_id'] = instructionLibraryId;
        return this;
    }
    public set instructionLibraryId(instructionLibraryId: string  | undefined) {
        this['instruction_library_id'] = instructionLibraryId;
    }
    public get instructionLibraryId(): string | undefined {
        return this['instruction_library_id'];
    }
    public withBody(body: UpdateInstructionLibraryReq): UpdateInstructionLibraryRequest {
        this['body'] = body;
        return this;
    }
}