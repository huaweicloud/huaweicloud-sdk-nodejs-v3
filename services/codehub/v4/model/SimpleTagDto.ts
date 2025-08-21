import { GpgKeyDto } from './GpgKeyDto';


export class SimpleTagDto {
    public name?: string;
    public message?: string;
    public target?: string;
    public gpgKey?: GpgKeyDto;
    private 'can_delete'?: boolean;
    private 'can_read'?: boolean;
    private 'can_download'?: boolean;
    public constructor() { 
    }
    public withName(name: string): SimpleTagDto {
        this['name'] = name;
        return this;
    }
    public withMessage(message: string): SimpleTagDto {
        this['message'] = message;
        return this;
    }
    public withTarget(target: string): SimpleTagDto {
        this['target'] = target;
        return this;
    }
    public withGpgKey(gpgKey: GpgKeyDto): SimpleTagDto {
        this['gpgKey'] = gpgKey;
        return this;
    }
    public withCanDelete(canDelete: boolean): SimpleTagDto {
        this['can_delete'] = canDelete;
        return this;
    }
    public set canDelete(canDelete: boolean  | undefined) {
        this['can_delete'] = canDelete;
    }
    public get canDelete(): boolean | undefined {
        return this['can_delete'];
    }
    public withCanRead(canRead: boolean): SimpleTagDto {
        this['can_read'] = canRead;
        return this;
    }
    public set canRead(canRead: boolean  | undefined) {
        this['can_read'] = canRead;
    }
    public get canRead(): boolean | undefined {
        return this['can_read'];
    }
    public withCanDownload(canDownload: boolean): SimpleTagDto {
        this['can_download'] = canDownload;
        return this;
    }
    public set canDownload(canDownload: boolean  | undefined) {
        this['can_download'] = canDownload;
    }
    public get canDownload(): boolean | undefined {
        return this['can_download'];
    }
}