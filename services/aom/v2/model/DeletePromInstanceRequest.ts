

export class DeletePromInstanceRequest {
    private 'prom_id'?: string;
    public constructor(promId?: string) { 
        this['prom_id'] = promId;
    }
    public withPromId(promId: string): DeletePromInstanceRequest {
        this['prom_id'] = promId;
        return this;
    }
    public set promId(promId: string  | undefined) {
        this['prom_id'] = promId;
    }
    public get promId(): string | undefined {
        return this['prom_id'];
    }
}