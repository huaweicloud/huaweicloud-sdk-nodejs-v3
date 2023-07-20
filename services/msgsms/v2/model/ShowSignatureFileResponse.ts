
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSignatureFileResponse extends SdkResponse {
    private 'file_id'?: string;
    private 'file_name'?: string;
    private 'file_ref'?: number;
    private 'file_size'?: number;
    private 'file_type'?: number;
    private 'module_type'?: number;
    public operator?: string;
    private 'file_desc'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withFileId(fileId: string): ShowSignatureFileResponse {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string  | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId(): string | undefined {
        return this['file_id'];
    }
    public withFileName(fileName: string): ShowSignatureFileResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileRef(fileRef: number): ShowSignatureFileResponse {
        this['file_ref'] = fileRef;
        return this;
    }
    public set fileRef(fileRef: number  | undefined) {
        this['file_ref'] = fileRef;
    }
    public get fileRef(): number | undefined {
        return this['file_ref'];
    }
    public withFileSize(fileSize: number): ShowSignatureFileResponse {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileType(fileType: number): ShowSignatureFileResponse {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: number  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): number | undefined {
        return this['file_type'];
    }
    public withModuleType(moduleType: number): ShowSignatureFileResponse {
        this['module_type'] = moduleType;
        return this;
    }
    public set moduleType(moduleType: number  | undefined) {
        this['module_type'] = moduleType;
    }
    public get moduleType(): number | undefined {
        return this['module_type'];
    }
    public withOperator(operator: string): ShowSignatureFileResponse {
        this['operator'] = operator;
        return this;
    }
    public withFileDesc(fileDesc: string): ShowSignatureFileResponse {
        this['file_desc'] = fileDesc;
        return this;
    }
    public set fileDesc(fileDesc: string  | undefined) {
        this['file_desc'] = fileDesc;
    }
    public get fileDesc(): string | undefined {
        return this['file_desc'];
    }
    public withUpdateTime(updateTime: string): ShowSignatureFileResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}