

export class ShowControlRequest {
    private 'control_id'?: string;
    public constructor(controlId?: string) { 
        this['control_id'] = controlId;
    }
    public withControlId(controlId: string): ShowControlRequest {
        this['control_id'] = controlId;
        return this;
    }
    public set controlId(controlId: string  | undefined) {
        this['control_id'] = controlId;
    }
    public get controlId(): string | undefined {
        return this['control_id'];
    }
}