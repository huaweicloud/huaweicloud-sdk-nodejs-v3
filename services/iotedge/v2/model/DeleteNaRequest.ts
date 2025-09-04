

export class DeleteNaRequest {
    private 'na_id'?: string;
    public constructor(naId?: string) { 
        this['na_id'] = naId;
    }
    public withNaId(naId: string): DeleteNaRequest {
        this['na_id'] = naId;
        return this;
    }
    public set naId(naId: string  | undefined) {
        this['na_id'] = naId;
    }
    public get naId(): string | undefined {
        return this['na_id'];
    }
}