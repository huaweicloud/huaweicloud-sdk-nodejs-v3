

export class ListQuotasRespQuotasResources {
    public type?: string;
    public available?: number;
    private 'edge_volume'?: number;
    public constructor() { 
    }
    public withType(type: string): ListQuotasRespQuotasResources {
        this['type'] = type;
        return this;
    }
    public withAvailable(available: number): ListQuotasRespQuotasResources {
        this['available'] = available;
        return this;
    }
    public withEdgeVolume(edgeVolume: number): ListQuotasRespQuotasResources {
        this['edge_volume'] = edgeVolume;
        return this;
    }
    public set edgeVolume(edgeVolume: number  | undefined) {
        this['edge_volume'] = edgeVolume;
    }
    public get edgeVolume(): number | undefined {
        return this['edge_volume'];
    }
}