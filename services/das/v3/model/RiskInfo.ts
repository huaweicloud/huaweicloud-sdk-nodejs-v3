import { InstanceInfoForRisk } from './InstanceInfoForRisk';


export class RiskInfo {
    private 'node_id'?: string;
    private 'instance_info'?: InstanceInfoForRisk;
    public values?: Array<number>;
    public constructor() { 
    }
    public withNodeId(nodeId: string): RiskInfo {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withInstanceInfo(instanceInfo: InstanceInfoForRisk): RiskInfo {
        this['instance_info'] = instanceInfo;
        return this;
    }
    public set instanceInfo(instanceInfo: InstanceInfoForRisk  | undefined) {
        this['instance_info'] = instanceInfo;
    }
    public get instanceInfo(): InstanceInfoForRisk | undefined {
        return this['instance_info'];
    }
    public withValues(values: Array<number>): RiskInfo {
        this['values'] = values;
        return this;
    }
}