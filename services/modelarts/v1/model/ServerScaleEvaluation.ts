

export class ServerScaleEvaluation {
    private 'is_sold_out'?: boolean;
    public flavor?: string;
    private 'resource_flavor'?: string;
    public constructor() { 
    }
    public withIsSoldOut(isSoldOut: boolean): ServerScaleEvaluation {
        this['is_sold_out'] = isSoldOut;
        return this;
    }
    public set isSoldOut(isSoldOut: boolean  | undefined) {
        this['is_sold_out'] = isSoldOut;
    }
    public get isSoldOut(): boolean | undefined {
        return this['is_sold_out'];
    }
    public withFlavor(flavor: string): ServerScaleEvaluation {
        this['flavor'] = flavor;
        return this;
    }
    public withResourceFlavor(resourceFlavor: string): ServerScaleEvaluation {
        this['resource_flavor'] = resourceFlavor;
        return this;
    }
    public set resourceFlavor(resourceFlavor: string  | undefined) {
        this['resource_flavor'] = resourceFlavor;
    }
    public get resourceFlavor(): string | undefined {
        return this['resource_flavor'];
    }
}