

export class ShowIpNumRequirementRequest {
    private 'node_num'?: number;
    private 'engine_name'?: string;
    private 'instance_mode'?: string;
    private 'instance_id'?: string;
    public constructor(nodeNum?: number) { 
        this['node_num'] = nodeNum;
    }
    public withNodeNum(nodeNum: number): ShowIpNumRequirementRequest {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withEngineName(engineName: string): ShowIpNumRequirementRequest {
        this['engine_name'] = engineName;
        return this;
    }
    public set engineName(engineName: string  | undefined) {
        this['engine_name'] = engineName;
    }
    public get engineName(): string | undefined {
        return this['engine_name'];
    }
    public withInstanceMode(instanceMode: string): ShowIpNumRequirementRequest {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): string | undefined {
        return this['instance_mode'];
    }
    public withInstanceId(instanceId: string): ShowIpNumRequirementRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}