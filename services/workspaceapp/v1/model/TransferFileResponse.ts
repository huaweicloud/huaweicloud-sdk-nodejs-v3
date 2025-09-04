
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TransferFileResponse extends SdkResponse {
    private 'file_url'?: string;
    private 'file_code'?: string;
    private 'file_acc_code'?: string;
    private 'file_system_name'?: string;
    private 'folder_name'?: string;
    public constructor() { 
        super();
    }
    public withFileUrl(fileUrl: string): TransferFileResponse {
        this['file_url'] = fileUrl;
        return this;
    }
    public set fileUrl(fileUrl: string  | undefined) {
        this['file_url'] = fileUrl;
    }
    public get fileUrl(): string | undefined {
        return this['file_url'];
    }
    public withFileCode(fileCode: string): TransferFileResponse {
        this['file_code'] = fileCode;
        return this;
    }
    public set fileCode(fileCode: string  | undefined) {
        this['file_code'] = fileCode;
    }
    public get fileCode(): string | undefined {
        return this['file_code'];
    }
    public withFileAccCode(fileAccCode: string): TransferFileResponse {
        this['file_acc_code'] = fileAccCode;
        return this;
    }
    public set fileAccCode(fileAccCode: string  | undefined) {
        this['file_acc_code'] = fileAccCode;
    }
    public get fileAccCode(): string | undefined {
        return this['file_acc_code'];
    }
    public withFileSystemName(fileSystemName: string): TransferFileResponse {
        this['file_system_name'] = fileSystemName;
        return this;
    }
    public set fileSystemName(fileSystemName: string  | undefined) {
        this['file_system_name'] = fileSystemName;
    }
    public get fileSystemName(): string | undefined {
        return this['file_system_name'];
    }
    public withFolderName(folderName: string): TransferFileResponse {
        this['folder_name'] = folderName;
        return this;
    }
    public set folderName(folderName: string  | undefined) {
        this['folder_name'] = folderName;
    }
    public get folderName(): string | undefined {
        return this['folder_name'];
    }
}