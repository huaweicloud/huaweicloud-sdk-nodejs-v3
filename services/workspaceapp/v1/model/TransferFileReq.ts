

export class TransferFileReq {
    private 'transfer_type'?: number;
    private 'user_name'?: string;
    private 'file_url'?: string;
    private 'file_code'?: string;
    private 'file_acc_code'?: string;
    private 'target_file_url'?: string;
    private 'file_system_name'?: string;
    public constructor(transferType?: number, userName?: string, fileUrl?: string) { 
        this['transfer_type'] = transferType;
        this['user_name'] = userName;
        this['file_url'] = fileUrl;
    }
    public withTransferType(transferType: number): TransferFileReq {
        this['transfer_type'] = transferType;
        return this;
    }
    public set transferType(transferType: number  | undefined) {
        this['transfer_type'] = transferType;
    }
    public get transferType(): number | undefined {
        return this['transfer_type'];
    }
    public withUserName(userName: string): TransferFileReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withFileUrl(fileUrl: string): TransferFileReq {
        this['file_url'] = fileUrl;
        return this;
    }
    public set fileUrl(fileUrl: string  | undefined) {
        this['file_url'] = fileUrl;
    }
    public get fileUrl(): string | undefined {
        return this['file_url'];
    }
    public withFileCode(fileCode: string): TransferFileReq {
        this['file_code'] = fileCode;
        return this;
    }
    public set fileCode(fileCode: string  | undefined) {
        this['file_code'] = fileCode;
    }
    public get fileCode(): string | undefined {
        return this['file_code'];
    }
    public withFileAccCode(fileAccCode: string): TransferFileReq {
        this['file_acc_code'] = fileAccCode;
        return this;
    }
    public set fileAccCode(fileAccCode: string  | undefined) {
        this['file_acc_code'] = fileAccCode;
    }
    public get fileAccCode(): string | undefined {
        return this['file_acc_code'];
    }
    public withTargetFileUrl(targetFileUrl: string): TransferFileReq {
        this['target_file_url'] = targetFileUrl;
        return this;
    }
    public set targetFileUrl(targetFileUrl: string  | undefined) {
        this['target_file_url'] = targetFileUrl;
    }
    public get targetFileUrl(): string | undefined {
        return this['target_file_url'];
    }
    public withFileSystemName(fileSystemName: string): TransferFileReq {
        this['file_system_name'] = fileSystemName;
        return this;
    }
    public set fileSystemName(fileSystemName: string  | undefined) {
        this['file_system_name'] = fileSystemName;
    }
    public get fileSystemName(): string | undefined {
        return this['file_system_name'];
    }
}