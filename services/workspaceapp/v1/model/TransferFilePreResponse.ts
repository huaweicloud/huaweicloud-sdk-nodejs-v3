
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class TransferFilePreResponse extends SdkResponse {
    private 'target_file_url'?: string;
    private 'file_system_name'?: string;
    private 'folder_name'?: string;
    public constructor() { 
        super();
    }
    public withTargetFileUrl(targetFileUrl: string): TransferFilePreResponse {
        this['target_file_url'] = targetFileUrl;
        return this;
    }
    public set targetFileUrl(targetFileUrl: string  | undefined) {
        this['target_file_url'] = targetFileUrl;
    }
    public get targetFileUrl(): string | undefined {
        return this['target_file_url'];
    }
    public withFileSystemName(fileSystemName: string): TransferFilePreResponse {
        this['file_system_name'] = fileSystemName;
        return this;
    }
    public set fileSystemName(fileSystemName: string  | undefined) {
        this['file_system_name'] = fileSystemName;
    }
    public get fileSystemName(): string | undefined {
        return this['file_system_name'];
    }
    public withFolderName(folderName: string): TransferFilePreResponse {
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