

export class BatchDeleteBaseDTO {
    private 'dw_id'?: string;
    public ids?: Array<string>;
    public constructor() { 
    }
    public withDwId(dwId: string): BatchDeleteBaseDTO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withIds(ids: Array<string>): BatchDeleteBaseDTO {
        this['ids'] = ids;
        return this;
    }
}