

export class ShowSloDetailRequest {
    private 'slo_id'?: string;
    public constructor(sloId?: string) { 
        this['slo_id'] = sloId;
    }
    public withSloId(sloId: string): ShowSloDetailRequest {
        this['slo_id'] = sloId;
        return this;
    }
    public set sloId(sloId: string  | undefined) {
        this['slo_id'] = sloId;
    }
    public get sloId(): string | undefined {
        return this['slo_id'];
    }
}