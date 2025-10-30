import { ImageData } from './ImageData';


export class BackCopyByHostIdResponse {
    private 'backup_id'?: string;
    private 'backup_name'?: string;
    private 'backup_status'?: string;
    private 'create_time'?: number;
    private 'os_images_data'?: Array<ImageData>;
    private 'backup_tag'?: number;
    public constructor() { 
    }
    public withBackupId(backupId: string): BackCopyByHostIdResponse {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupName(backupName: string): BackCopyByHostIdResponse {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withBackupStatus(backupStatus: string): BackCopyByHostIdResponse {
        this['backup_status'] = backupStatus;
        return this;
    }
    public set backupStatus(backupStatus: string  | undefined) {
        this['backup_status'] = backupStatus;
    }
    public get backupStatus(): string | undefined {
        return this['backup_status'];
    }
    public withCreateTime(createTime: number): BackCopyByHostIdResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withOsImagesData(osImagesData: Array<ImageData>): BackCopyByHostIdResponse {
        this['os_images_data'] = osImagesData;
        return this;
    }
    public set osImagesData(osImagesData: Array<ImageData>  | undefined) {
        this['os_images_data'] = osImagesData;
    }
    public get osImagesData(): Array<ImageData> | undefined {
        return this['os_images_data'];
    }
    public withBackupTag(backupTag: number): BackCopyByHostIdResponse {
        this['backup_tag'] = backupTag;
        return this;
    }
    public set backupTag(backupTag: number  | undefined) {
        this['backup_tag'] = backupTag;
    }
    public get backupTag(): number | undefined {
        return this['backup_tag'];
    }
}