
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSignatureFileResponse extends SdkResponse {
    private 'file_id'?: string | undefined;
    private 'file_name'?: string | undefined;
    private 'file_ref'?: number | undefined;
    private 'file_size'?: number | undefined;
    private 'file_type'?: number | undefined;
    private 'module_type'?: number | undefined;
    public operator?: string;
    private 'update_time'?: string | undefined;
    public constructor() { 
        super();
    }
    public withFileId(fileId: string): ShowSignatureFileResponse {
        this['file_id'] = fileId;
        return this;
    }
    public set fileId(fileId: string | undefined) {
        this['file_id'] = fileId;
    }
    public get fileId() {
        return this['file_id'];
    }
    public withFileName(fileName: string): ShowSignatureFileResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName() {
        return this['file_name'];
    }
    public withFileRef(fileRef: number): ShowSignatureFileResponse {
        this['file_ref'] = fileRef;
        return this;
    }
    public set fileRef(fileRef: number | undefined) {
        this['file_ref'] = fileRef;
    }
    public get fileRef() {
        return this['file_ref'];
    }
    public withFileSize(fileSize: number): ShowSignatureFileResponse {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize() {
        return this['file_size'];
    }
    public withFileType(fileType: number): ShowSignatureFileResponse {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: number | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType() {
        return this['file_type'];
    }
    public withModuleType(moduleType: number): ShowSignatureFileResponse {
        this['module_type'] = moduleType;
        return this;
    }
    public set moduleType(moduleType: number | undefined) {
        this['module_type'] = moduleType;
    }
    public get moduleType() {
        return this['module_type'];
    }
    public withOperator(operator: string): ShowSignatureFileResponse {
        this['operator'] = operator;
        return this;
    }
    public withUpdateTime(updateTime: string): ShowSignatureFileResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
}