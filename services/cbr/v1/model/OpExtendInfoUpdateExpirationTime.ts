

export class OpExtendInfoUpdateExpirationTime {
    private 'affected_backups_count'?: number;
    private 'expiration_day'?: string;
    public constructor() { 
    }
    public withAffectedBackupsCount(affectedBackupsCount: number): OpExtendInfoUpdateExpirationTime {
        this['affected_backups_count'] = affectedBackupsCount;
        return this;
    }
    public set affectedBackupsCount(affectedBackupsCount: number  | undefined) {
        this['affected_backups_count'] = affectedBackupsCount;
    }
    public get affectedBackupsCount(): number | undefined {
        return this['affected_backups_count'];
    }
    public withExpirationDay(expirationDay: string): OpExtendInfoUpdateExpirationTime {
        this['expiration_day'] = expirationDay;
        return this;
    }
    public set expirationDay(expirationDay: string  | undefined) {
        this['expiration_day'] = expirationDay;
    }
    public get expirationDay(): string | undefined {
        return this['expiration_day'];
    }
}