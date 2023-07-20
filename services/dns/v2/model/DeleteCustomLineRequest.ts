

export class DeleteCustomLineRequest {
    private 'line_id'?: string;
    public constructor(lineId?: string) { 
        this['line_id'] = lineId;
    }
    public withLineId(lineId: string): DeleteCustomLineRequest {
        this['line_id'] = lineId;
        return this;
    }
    public set lineId(lineId: string  | undefined) {
        this['line_id'] = lineId;
    }
    public get lineId(): string | undefined {
        return this['line_id'];
    }
}