

export class AppWhitelistAbnormalInfo {
    private 'abnormal_type'?: number;
    private 'abnormal_description'?: string;
    public constructor() { 
    }
    public withAbnormalType(abnormalType: number): AppWhitelistAbnormalInfo {
        this['abnormal_type'] = abnormalType;
        return this;
    }
    public set abnormalType(abnormalType: number  | undefined) {
        this['abnormal_type'] = abnormalType;
    }
    public get abnormalType(): number | undefined {
        return this['abnormal_type'];
    }
    public withAbnormalDescription(abnormalDescription: string): AppWhitelistAbnormalInfo {
        this['abnormal_description'] = abnormalDescription;
        return this;
    }
    public set abnormalDescription(abnormalDescription: string  | undefined) {
        this['abnormal_description'] = abnormalDescription;
    }
    public get abnormalDescription(): string | undefined {
        return this['abnormal_description'];
    }
}