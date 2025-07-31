import { WtpProtectHostDirResponseInfo } from './WtpProtectHostDirResponseInfo';


export class WtpProtectDirResponseInfo {
    private 'protect_dir_list'?: Array<WtpProtectHostDirResponseInfo>;
    private 'exclue_file_type'?: string;
    private 'exclude_file_type'?: string;
    private 'protect_mode'?: string;
    public constructor() { 
    }
    public withProtectDirList(protectDirList: Array<WtpProtectHostDirResponseInfo>): WtpProtectDirResponseInfo {
        this['protect_dir_list'] = protectDirList;
        return this;
    }
    public set protectDirList(protectDirList: Array<WtpProtectHostDirResponseInfo>  | undefined) {
        this['protect_dir_list'] = protectDirList;
    }
    public get protectDirList(): Array<WtpProtectHostDirResponseInfo> | undefined {
        return this['protect_dir_list'];
    }
    public withExclueFileType(exclueFileType: string): WtpProtectDirResponseInfo {
        this['exclue_file_type'] = exclueFileType;
        return this;
    }
    public set exclueFileType(exclueFileType: string  | undefined) {
        this['exclue_file_type'] = exclueFileType;
    }
    public get exclueFileType(): string | undefined {
        return this['exclue_file_type'];
    }
    public withExcludeFileType(excludeFileType: string): WtpProtectDirResponseInfo {
        this['exclude_file_type'] = excludeFileType;
        return this;
    }
    public set excludeFileType(excludeFileType: string  | undefined) {
        this['exclude_file_type'] = excludeFileType;
    }
    public get excludeFileType(): string | undefined {
        return this['exclude_file_type'];
    }
    public withProtectMode(protectMode: string): WtpProtectDirResponseInfo {
        this['protect_mode'] = protectMode;
        return this;
    }
    public set protectMode(protectMode: string  | undefined) {
        this['protect_mode'] = protectMode;
    }
    public get protectMode(): string | undefined {
        return this['protect_mode'];
    }
}