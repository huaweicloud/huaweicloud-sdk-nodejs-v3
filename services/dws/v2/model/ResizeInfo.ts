

export class ResizeInfo {
    private 'target_node_num'?: number;
    private 'origin_node_num'?: number;
    private 'resize_status'?: string;
    private 'start_time'?: string;
    public constructor() { 
    }
    public withTargetNodeNum(targetNodeNum: number): ResizeInfo {
        this['target_node_num'] = targetNodeNum;
        return this;
    }
    public set targetNodeNum(targetNodeNum: number  | undefined) {
        this['target_node_num'] = targetNodeNum;
    }
    public get targetNodeNum(): number | undefined {
        return this['target_node_num'];
    }
    public withOriginNodeNum(originNodeNum: number): ResizeInfo {
        this['origin_node_num'] = originNodeNum;
        return this;
    }
    public set originNodeNum(originNodeNum: number  | undefined) {
        this['origin_node_num'] = originNodeNum;
    }
    public get originNodeNum(): number | undefined {
        return this['origin_node_num'];
    }
    public withResizeStatus(resizeStatus: string): ResizeInfo {
        this['resize_status'] = resizeStatus;
        return this;
    }
    public set resizeStatus(resizeStatus: string  | undefined) {
        this['resize_status'] = resizeStatus;
    }
    public get resizeStatus(): string | undefined {
        return this['resize_status'];
    }
    public withStartTime(startTime: string): ResizeInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}