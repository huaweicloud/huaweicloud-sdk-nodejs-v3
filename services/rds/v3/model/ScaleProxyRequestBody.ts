

export class ScaleProxyRequestBody {
    private 'flavor_ref'?: string;
    public delay?: boolean;
    public constructor(flavorRef?: string, delay?: boolean) { 
        this['flavor_ref'] = flavorRef;
        this['delay'] = delay;
    }
    public withFlavorRef(flavorRef: string): ScaleProxyRequestBody {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withDelay(delay: boolean): ScaleProxyRequestBody {
        this['delay'] = delay;
        return this;
    }
}