

export class IndependentBodyReq {
    private 'flavor_ref'?: string;
    private 'node_size'?: number;
    private 'volume_type'?: string;
    public constructor(flavorRef?: string, nodeSize?: number, volumeType?: string) { 
        this['flavor_ref'] = flavorRef;
        this['node_size'] = nodeSize;
        this['volume_type'] = volumeType;
    }
    public withFlavorRef(flavorRef: string): IndependentBodyReq {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withNodeSize(nodeSize: number): IndependentBodyReq {
        this['node_size'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: number  | undefined) {
        this['node_size'] = nodeSize;
    }
    public get nodeSize(): number | undefined {
        return this['node_size'];
    }
    public withVolumeType(volumeType: string): IndependentBodyReq {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
}