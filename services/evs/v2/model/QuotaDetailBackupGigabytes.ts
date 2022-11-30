import { QuotaDetail } from './QuotaDetail';


export class QuotaDetailBackupGigabytes {
    private 'in_use': number | undefined;
    public limit: number;
    public reserved: number;
    public constructor(inUse?: any, limit?: any, reserved?: any) { 
        this['in_use'] = inUse;
        this['limit'] = limit;
        this['reserved'] = reserved;
    }
    public withInUse(inUse: number): QuotaDetailBackupGigabytes {
        this['in_use'] = inUse;
        return this;
    }
    public set inUse(inUse: number | undefined) {
        this['in_use'] = inUse;
    }
    public get inUse() {
        return this['in_use'];
    }
    public withLimit(limit: number): QuotaDetailBackupGigabytes {
        this['limit'] = limit;
        return this;
    }
    public withReserved(reserved: number): QuotaDetailBackupGigabytes {
        this['reserved'] = reserved;
        return this;
    }
}