

export class PoolMetadataUpdateAnnotations {
    private 'os.modelarts/description'?: string;
    private 'os.modelarts/order.id'?: string;
    public constructor() { 
    }
    public withOsModelartsDescription(osModelartsDescription: string): PoolMetadataUpdateAnnotations {
        this['os.modelarts/description'] = osModelartsDescription;
        return this;
    }
    public set osModelartsDescription(osModelartsDescription: string  | undefined) {
        this['os.modelarts/description'] = osModelartsDescription;
    }
    public get osModelartsDescription(): string | undefined {
        return this['os.modelarts/description'];
    }
    public withOsModelartsOrderId(osModelartsOrderId: string): PoolMetadataUpdateAnnotations {
        this['os.modelarts/order.id'] = osModelartsOrderId;
        return this;
    }
    public set osModelartsOrderId(osModelartsOrderId: string  | undefined) {
        this['os.modelarts/order.id'] = osModelartsOrderId;
    }
    public get osModelartsOrderId(): string | undefined {
        return this['os.modelarts/order.id'];
    }
}