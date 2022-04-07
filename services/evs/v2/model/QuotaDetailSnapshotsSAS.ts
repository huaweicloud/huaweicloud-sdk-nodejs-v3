import { QuotaDetail } from './QuotaDetail';


export class QuotaDetailSnapshotsSAS {
    private 'in_use': number | undefined;
    public limit: number;
    public reserved: number;
    public constructor(inUse?: any, limit?: any, reserved?: any) { 
        this['in_use'] = inUse;
        this['limit'] = limit;
        this['reserved'] = reserved;
    }
    public withInUse(inUse: number): QuotaDetailSnapshotsSAS {
        this['in_use'] = inUse;
        return this;
    }
    public set inUse(inUse: number | undefined) {
        this['in_use'] = inUse;
    }
    public get inUse() {
        return this['in_use'];
    }
    public withLimit(limit: number): QuotaDetailSnapshotsSAS {
        this['limit'] = limit;
        return this;
    }
    public withReserved(reserved: number): QuotaDetailSnapshotsSAS {
        this['reserved'] = reserved;
        return this;
    }
}