

export class ShowPwdDirectoryInfo {
    public tag?: string;
    private 'sub_tag'?: string;
    public checked?: boolean;
    public key?: string;
    public constructor() { 
    }
    public withTag(tag: string): ShowPwdDirectoryInfo {
        this['tag'] = tag;
        return this;
    }
    public withSubTag(subTag: string): ShowPwdDirectoryInfo {
        this['sub_tag'] = subTag;
        return this;
    }
    public set subTag(subTag: string  | undefined) {
        this['sub_tag'] = subTag;
    }
    public get subTag(): string | undefined {
        return this['sub_tag'];
    }
    public withChecked(checked: boolean): ShowPwdDirectoryInfo {
        this['checked'] = checked;
        return this;
    }
    public withKey(key: string): ShowPwdDirectoryInfo {
        this['key'] = key;
        return this;
    }
}