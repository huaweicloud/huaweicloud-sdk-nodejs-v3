

export class TransferFilePreReq {
    private 'user_name'?: string;
    private 'file_name'?: string;
    private 'file_code'?: string;
    private 'file_acc_code'?: string;
    private 'file_system_name'?: string;
    public constructor(userName?: string, fileName?: string, fileCode?: string, fileAccCode?: string) { 
        this['user_name'] = userName;
        this['file_name'] = fileName;
        this['file_code'] = fileCode;
        this['file_acc_code'] = fileAccCode;
    }
    public withUserName(userName: string): TransferFilePreReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withFileName(fileName: string): TransferFilePreReq {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFileCode(fileCode: string): TransferFilePreReq {
        this['file_code'] = fileCode;
        return this;
    }
    public set fileCode(fileCode: string  | undefined) {
        this['file_code'] = fileCode;
    }
    public get fileCode(): string | undefined {
        return this['file_code'];
    }
    public withFileAccCode(fileAccCode: string): TransferFilePreReq {
        this['file_acc_code'] = fileAccCode;
        return this;
    }
    public set fileAccCode(fileAccCode: string  | undefined) {
        this['file_acc_code'] = fileAccCode;
    }
    public get fileAccCode(): string | undefined {
        return this['file_acc_code'];
    }
    public withFileSystemName(fileSystemName: string): TransferFilePreReq {
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