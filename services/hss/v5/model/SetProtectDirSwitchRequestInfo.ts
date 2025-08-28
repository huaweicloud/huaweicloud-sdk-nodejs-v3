

export class SetProtectDirSwitchRequestInfo {
    private 'protect_dir_list'?: Array<string>;
    private 'enable_protect'?: boolean;
    public constructor(protectDirList?: Array<string>, enableProtect?: boolean) { 
        this['protect_dir_list'] = protectDirList;
        this['enable_protect'] = enableProtect;
    }
    public withProtectDirList(protectDirList: Array<string>): SetProtectDirSwitchRequestInfo {
        this['protect_dir_list'] = protectDirList;
        return this;
    }
    public set protectDirList(protectDirList: Array<string>  | undefined) {
        this['protect_dir_list'] = protectDirList;
    }
    public get protectDirList(): Array<string> | undefined {
        return this['protect_dir_list'];
    }
    public withEnableProtect(enableProtect: boolean): SetProtectDirSwitchRequestInfo {
        this['enable_protect'] = enableProtect;
        return this;
    }
    public set enableProtect(enableProtect: boolean  | undefined) {
        this['enable_protect'] = enableProtect;
    }
    public get enableProtect(): boolean | undefined {
        return this['enable_protect'];
    }
}