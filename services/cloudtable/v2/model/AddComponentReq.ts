

export class AddComponentReq {
    private 'node_num'?: number;
    public constructor(nodeNum?: number) { 
        this['node_num'] = nodeNum;
    }
    public withNodeNum(nodeNum: number): AddComponentReq {
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