

export class ListInstancesRequest {
    public offset?: number;
    public limit?: number;
    public marker?: string;
    public name?: string;
    private 'instance_type'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListInstancesRequest {
        this['marker'] = marker;
        return this;
    }
    public withName(name: string): ListInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withInstanceType(instanceType: string): ListInstancesRequest {
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