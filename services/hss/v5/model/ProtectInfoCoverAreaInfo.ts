

export class ProtectInfoCoverAreaInfo {
    private 'protect_host_num'?: number;
    private 'un_protect_host_num'?: number;
    private 'protect_rate'?: number;
    private 'beat_rate'?: number;
    public constructor() { 
    }
    public withProtectHostNum(protectHostNum: number): ProtectInfoCoverAreaInfo {
        this['protect_host_num'] = protectHostNum;
        return this;
    }
    public set protectHostNum(protectHostNum: number  | undefined) {
        this['protect_host_num'] = protectHostNum;
    }
    public get protectHostNum(): number | undefined {
        return this['protect_host_num'];
    }
    public withUnProtectHostNum(unProtectHostNum: number): ProtectInfoCoverAreaInfo {
        this['un_protect_host_num'] = unProtectHostNum;
        return this;
    }
    public set unProtectHostNum(unProtectHostNum: number  | undefined) {
        this['un_protect_host_num'] = unProtectHostNum;
    }
    public get unProtectHostNum(): number | undefined {
        return this['un_protect_host_num'];
    }
    public withProtectRate(protectRate: number): ProtectInfoCoverAreaInfo {
        this['protect_rate'] = protectRate;
        return this;
    }
    public set protectRate(protectRate: number  | undefined) {
        this['protect_rate'] = protectRate;
    }
    public get protectRate(): number | undefined {
        return this['protect_rate'];
    }
    public withBeatRate(beatRate: number): ProtectInfoCoverAreaInfo {
        this['beat_rate'] = beatRate;
        return this;
    }
    public set beatRate(beatRate: number  | undefined) {
        this['beat_rate'] = beatRate;
    }
    public get beatRate(): number | undefined {
        return this['beat_rate'];
    }
}