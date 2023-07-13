

export class ResizeInfo {
    private 'target_node_num'?: number | undefined;
    private 'origin_node_num'?: number | undefined;
    private 'resize_status'?: string | undefined;
    private 'start_time'?: string | undefined;
    public constructor() { 
    }
    public withTargetNodeNum(targetNodeNum: number): ResizeInfo {
        this['target_node_num'] = targetNodeNum;
        return this;
    }
    public set targetNodeNum(targetNodeNum: number | undefined) {
        this['target_node_num'] = targetNodeNum;
    }
    public get targetNodeNum() {
        return this['target_node_num'];
    }
    public withOriginNodeNum(originNodeNum: number): ResizeInfo {
        this['origin_node_num'] = originNodeNum;
        return this;
    }
    public set originNodeNum(originNodeNum: number | undefined) {
        this['origin_node_num'] = originNodeNum;
    }
    public get originNodeNum() {
        return this['origin_node_num'];
    }
    public withResizeStatus(resizeStatus: string): ResizeInfo {
        this['resize_status'] = resizeStatus;
        return this;
    }
    public set resizeStatus(resizeStatus: string | undefined) {
        this['resize_status'] = resizeStatus;
    }
    public get resizeStatus() {
        return this['resize_status'];
    }
    public withStartTime(startTime: string): ResizeInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
}