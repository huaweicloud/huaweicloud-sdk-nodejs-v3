

export class GrowNodeReq {
    private 'component_name'?: string;
    private 'node_num'?: number;
    public constructor(componentName?: string, nodeNum?: number) { 
        this['component_name'] = componentName;
        this['node_num'] = nodeNum;
    }
    public withComponentName(componentName: string): GrowNodeReq {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string  | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName(): string | undefined {
        return this['component_name'];
    }
    public withNodeNum(nodeNum: number): GrowNodeReq {
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