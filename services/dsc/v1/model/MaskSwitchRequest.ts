

export class MaskSwitchRequest {
    public status?: number;
    public constructor(status?: number) { 
        this['status'] = status;
    }
    public withStatus(status: number): MaskSwitchRequest {
        this['status'] = status;
        return this;
    }
}