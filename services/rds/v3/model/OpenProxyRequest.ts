

export class OpenProxyRequest {
    private 'flavor_id'?: string;
    private 'node_num'?: number;
    public constructor() { 
    }
    public withFlavorId(flavorId: string): OpenProxyRequest {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withNodeNum(nodeNum: number): OpenProxyRequest {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
}