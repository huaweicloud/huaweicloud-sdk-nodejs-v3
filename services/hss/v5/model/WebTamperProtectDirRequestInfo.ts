import { WebTamperProtectHostDirRequestInfo } from './WebTamperProtectHostDirRequestInfo';


export class WebTamperProtectDirRequestInfo {
    private 'protect_dir_list'?: Array<WebTamperProtectHostDirRequestInfo>;
    private 'exclude_file_type'?: string;
    private 'exclue_file_type'?: string;
    private 'protect_mode'?: string;
    public constructor() { 
    }
    public withProtectDirList(protectDirList: Array<WebTamperProtectHostDirRequestInfo>): WebTamperProtectDirRequestInfo {
        this['protect_dir_list'] = protectDirList;
        return this;
    }
    public set protectDirList(protectDirList: Array<WebTamperProtectHostDirRequestInfo>  | undefined) {
        this['protect_dir_list'] = protectDirList;
    }
    public get protectDirList(): Array<WebTamperProtectHostDirRequestInfo> | undefined {
        return this['protect_dir_list'];
    }
    public withExcludeFileType(excludeFileType: string): WebTamperProtectDirRequestInfo {
        this['exclude_file_type'] = excludeFileType;
        return this;
    }
    public set excludeFileType(excludeFileType: string  | undefined) {
        this['exclude_file_type'] = excludeFileType;
    }
    public get excludeFileType(): string | undefined {
        return this['exclude_file_type'];
    }
    public withExclueFileType(exclueFileType: string): WebTamperProtectDirRequestInfo {
        this['exclue_file_type'] = exclueFileType;
        return this;
    }
    public set exclueFileType(exclueFileType: string  | undefined) {
        this['exclue_file_type'] = exclueFileType;
    }
    public get exclueFileType(): string | undefined {
        return this['exclue_file_type'];
    }
    public withProtectMode(protectMode: string): WebTamperProtectDirRequestInfo {
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