import { ScaleOut } from './ScaleOut';


export class ResizeClusterRequestBody {
    private 'scale_out'?: ScaleOut;
    private 'logical_cluster_name'?: string;
    private 'create_node_only'?: boolean;
    private 'waiting_for_killing'?: number;
    private 'auto_redistribute'?: boolean;
    public constructor(scaleOut?: ScaleOut) { 
        this['scale_out'] = scaleOut;
    }
    public withScaleOut(scaleOut: ScaleOut): ResizeClusterRequestBody {
        this['scale_out'] = scaleOut;
        return this;
    }
    public set scaleOut(scaleOut: ScaleOut  | undefined) {
        this['scale_out'] = scaleOut;
    }
    public get scaleOut(): ScaleOut | undefined {
        return this['scale_out'];
    }
    public withLogicalClusterName(logicalClusterName: string): ResizeClusterRequestBody {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withCreateNodeOnly(createNodeOnly: boolean): ResizeClusterRequestBody {
        this['create_node_only'] = createNodeOnly;
        return this;
    }
    public set createNodeOnly(createNodeOnly: boolean  | undefined) {
        this['create_node_only'] = createNodeOnly;
    }
    public get createNodeOnly(): boolean | undefined {
        return this['create_node_only'];
    }
    public withWaitingForKilling(waitingForKilling: number): ResizeClusterRequestBody {
        this['waiting_for_killing'] = waitingForKilling;
        return this;
    }
    public set waitingForKilling(waitingForKilling: number  | undefined) {
        this['waiting_for_killing'] = waitingForKilling;
    }
    public get waitingForKilling(): number | undefined {
        return this['waiting_for_killing'];
    }
    public withAutoRedistribute(autoRedistribute: boolean): ResizeClusterRequestBody {
        this['auto_redistribute'] = autoRedistribute;
        return this;
    }
    public set autoRedistribute(autoRedistribute: boolean  | undefined) {
        this['auto_redistribute'] = autoRedistribute;
    }
    public get autoRedistribute(): boolean | undefined {
        return this['auto_redistribute'];
    }
}