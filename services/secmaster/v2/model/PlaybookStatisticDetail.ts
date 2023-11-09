

export class PlaybookStatisticDetail {
    private 'unapproved_num'?: number;
    private 'disabled_num'?: number;
    private 'enabled_num'?: number;
    public constructor() { 
    }
    public withUnapprovedNum(unapprovedNum: number): PlaybookStatisticDetail {
        this['unapproved_num'] = unapprovedNum;
        return this;
    }
    public set unapprovedNum(unapprovedNum: number  | undefined) {
        this['unapproved_num'] = unapprovedNum;
    }
    public get unapprovedNum(): number | undefined {
        return this['unapproved_num'];
    }
    public withDisabledNum(disabledNum: number): PlaybookStatisticDetail {
        this['disabled_num'] = disabledNum;
        return this;
    }
    public set disabledNum(disabledNum: number  | undefined) {
        this['disabled_num'] = disabledNum;
    }
    public get disabledNum(): number | undefined {
        return this['disabled_num'];
    }
    public withEnabledNum(enabledNum: number): PlaybookStatisticDetail {
        this['enabled_num'] = enabledNum;
        return this;
    }
    public set enabledNum(enabledNum: number  | undefined) {
        this['enabled_num'] = enabledNum;
    }
    public get enabledNum(): number | undefined {
        return this['enabled_num'];
    }
}