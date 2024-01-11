

export class BaseEndpointConfig {
    private 'is_target_readonly'?: boolean;
    private 'node_num'?: number;
    public constructor() { 
    }
    public withIsTargetReadonly(isTargetReadonly: boolean): BaseEndpointConfig {
        this['is_target_readonly'] = isTargetReadonly;
        return this;
    }
    public set isTargetReadonly(isTargetReadonly: boolean  | undefined) {
        this['is_target_readonly'] = isTargetReadonly;
    }
    public get isTargetReadonly(): boolean | undefined {
        return this['is_target_readonly'];
    }
    public withNodeNum(nodeNum: number): BaseEndpointConfig {
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