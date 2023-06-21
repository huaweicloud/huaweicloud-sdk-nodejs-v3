

export class GrowNodeReq {
    private 'component_name': string | undefined;
    private 'node_num': number | undefined;
    public constructor(componentName?: any, nodeNum?: any) { 
        this['component_name'] = componentName;
        this['node_num'] = nodeNum;
    }
    public withComponentName(componentName: string): GrowNodeReq {
        this['component_name'] = componentName;
        return this;
    }
    public set componentName(componentName: string | undefined) {
        this['component_name'] = componentName;
    }
    public get componentName() {
        return this['component_name'];
    }
    public withNodeNum(nodeNum: number): GrowNodeReq {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum() {
        return this['node_num'];
    }
}