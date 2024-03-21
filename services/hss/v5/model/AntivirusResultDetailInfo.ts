

export class AntivirusResultDetailInfo {
    private 'result_id'?: string;
    private 'malware_name'?: string;
    private 'file_path'?: string;
    private 'file_hash'?: string;
    private 'file_size'?: number;
    private 'file_owner'?: string;
    private 'file_attr'?: string;
    private 'file_ctime'?: number;
    private 'file_mtime'?: number;
    private 'update_time'?: number;
    private 'agent_id'?: string;
    public constructor() { 
    }
    public withResultId(resultId: string): AntivirusResultDetailInfo {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
    public withMalwareName(malwareName: string): AntivirusResultDetailInfo {
        this['malware_name'] = malwareName;
        return this;
    }
    public set malwareName(malwareName: string  | undefined) {
        this['malware_name'] = malwareName;
    }
    public get malwareName(): string | undefined {
        return this['malware_name'];
    }
    public withFilePath(filePath: string): AntivirusResultDetailInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileHash(fileHash: string): AntivirusResultDetailInfo {
        this['file_hash'] = fileHash;
        return this;
    }
    public set fileHash(fileHash: string  | undefined) {
        this['file_hash'] = fileHash;
    }
    public get fileHash(): string | undefined {
        return this['file_hash'];
    }
    public withFileSize(fileSize: number): AntivirusResultDetailInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withFileOwner(fileOwner: string): AntivirusResultDetailInfo {
        this['file_owner'] = fileOwner;
        return this;
    }
    public set fileOwner(fileOwner: string  | undefined) {
        this['file_owner'] = fileOwner;
    }
    public get fileOwner(): string | undefined {
        return this['file_owner'];
    }
    public withFileAttr(fileAttr: string): AntivirusResultDetailInfo {
        this['file_attr'] = fileAttr;
        return this;
    }
    public set fileAttr(fileAttr: string  | undefined) {
        this['file_attr'] = fileAttr;
    }
    public get fileAttr(): string | undefined {
        return this['file_attr'];
    }
    public withFileCtime(fileCtime: number): AntivirusResultDetailInfo {
        this['file_ctime'] = fileCtime;
        return this;
    }
    public set fileCtime(fileCtime: number  | undefined) {
        this['file_ctime'] = fileCtime;
    }
    public get fileCtime(): number | undefined {
        return this['file_ctime'];
    }
    public withFileMtime(fileMtime: number): AntivirusResultDetailInfo {
        this['file_mtime'] = fileMtime;
        return this;
    }
    public set fileMtime(fileMtime: number  | undefined) {
        this['file_mtime'] = fileMtime;
    }
    public get fileMtime(): number | undefined {
        return this['file_mtime'];
    }
    public withUpdateTime(updateTime: number): AntivirusResultDetailInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withAgentId(agentId: string): AntivirusResultDetailInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
}