

export class SetRDSBackupCnfReq {
    public indices?: string;
    public prefix?: string;
    public period?: string;
    public keepday?: number;
    public enable?: string;
    private 'delete_auto'?: string;
    public frequency?: string;
    public constructor(enable?: string) { 
        this['enable'] = enable;
    }
    public withIndices(indices: string): SetRDSBackupCnfReq {
        this['indices'] = indices;
        return this;
    }
    public withPrefix(prefix: string): SetRDSBackupCnfReq {
        this['prefix'] = prefix;
        return this;
    }
    public withPeriod(period: string): SetRDSBackupCnfReq {
        this['period'] = period;
        return this;
    }
    public withKeepday(keepday: number): SetRDSBackupCnfReq {
        this['keepday'] = keepday;
        return this;
    }
    public withEnable(enable: string): SetRDSBackupCnfReq {
        this['enable'] = enable;
        return this;
    }
    public withDeleteAuto(deleteAuto: string): SetRDSBackupCnfReq {
        this['delete_auto'] = deleteAuto;
        return this;
    }
    public set deleteAuto(deleteAuto: string  | undefined) {
        this['delete_auto'] = deleteAuto;
    }
    public get deleteAuto(): string | undefined {
        return this['delete_auto'];
    }
    public withFrequency(frequency: string): SetRDSBackupCnfReq {
        this['frequency'] = frequency;
        return this;
    }
}