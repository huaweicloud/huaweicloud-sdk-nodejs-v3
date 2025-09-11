

export class ListInstanceFlavorsRequest {
    public offset?: number;
    public limit?: number;
    public marker?: string;
    private 'instance_type'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListInstanceFlavorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceFlavorsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListInstanceFlavorsRequest {
        this['marker'] = marker;
        return this;
    }
    public withInstanceType(instanceType: string): ListInstanceFlavorsRequest {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
}