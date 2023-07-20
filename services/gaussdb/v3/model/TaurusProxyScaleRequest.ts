

export class TaurusProxyScaleRequest {
    private 'flavor_ref'?: string;
    public constructor(flavorRef?: string) { 
        this['flavor_ref'] = flavorRef;
    }
    public withFlavorRef(flavorRef: string): TaurusProxyScaleRequest {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
}