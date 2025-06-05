

export class ClusterInfoResponseDsInfo {
    private 'desired_num'?: number;
    private 'current_num'?: number;
    private 'ready_num'?: number;
    public constructor() { 
    }
    public withDesiredNum(desiredNum: number): ClusterInfoResponseDsInfo {
        this['desired_num'] = desiredNum;
        return this;
    }
    public set desiredNum(desiredNum: number  | undefined) {
        this['desired_num'] = desiredNum;
    }
    public get desiredNum(): number | undefined {
        return this['desired_num'];
    }
    public withCurrentNum(currentNum: number): ClusterInfoResponseDsInfo {
        this['current_num'] = currentNum;
        return this;
    }
    public set currentNum(currentNum: number  | undefined) {
        this['current_num'] = currentNum;
    }
    public get currentNum(): number | undefined {
        return this['current_num'];
    }
    public withReadyNum(readyNum: number): ClusterInfoResponseDsInfo {
        this['ready_num'] = readyNum;
        return this;
    }
    public set readyNum(readyNum: number  | undefined) {
        this['ready_num'] = readyNum;
    }
    public get readyNum(): number | undefined {
        return this['ready_num'];
    }
}