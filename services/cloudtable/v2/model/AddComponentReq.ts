

export class AddComponentReq {
    private 'node_num': number | undefined;
    public constructor(nodeNum?: any) { 
        this['node_num'] = nodeNum;
    }
    public withNodeNum(nodeNum: number): AddComponentReq {
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