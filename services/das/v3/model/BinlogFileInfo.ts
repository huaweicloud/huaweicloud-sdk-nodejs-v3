import { BinlogParseTaskInfo } from './BinlogParseTaskInfo';


export class BinlogFileInfo {
    private 'file_name'?: string;
    private 'backup_id'?: string;
    private 'file_size'?: number;
    private 'task_info'?: BinlogParseTaskInfo;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withFileName(fileName: string): BinlogFileInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withBackupId(backupId: string): BinlogFileInfo {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withFileSize(fileSize: number): BinlogFileInfo {
        this['file_size'] = fileSize;
        return this;
    }
    public set fileSize(fileSize: number  | undefined) {
        this['file_size'] = fileSize;
    }
    public get fileSize(): number | undefined {
        return this['file_size'];
    }
    public withTaskInfo(taskInfo: BinlogParseTaskInfo): BinlogFileInfo {
        this['task_info'] = taskInfo;
        return this;
    }
    public set taskInfo(taskInfo: BinlogParseTaskInfo  | undefined) {
        this['task_info'] = taskInfo;
    }
    public get taskInfo(): BinlogParseTaskInfo | undefined {
        return this['task_info'];
    }
    public withBeginTime(beginTime: string): BinlogFileInfo {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): BinlogFileInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}