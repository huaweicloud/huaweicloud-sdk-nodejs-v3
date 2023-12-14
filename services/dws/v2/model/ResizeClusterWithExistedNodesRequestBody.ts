import { BuildTaskInfo } from './BuildTaskInfo';
import { RedisConf } from './RedisConf';
import { Resize } from './Resize';
import { ScaleOut } from './ScaleOut';


export class ResizeClusterWithExistedNodesRequestBody {
    private 'scale_out'?: ScaleOut;
    public resize?: Resize;
    private 'force_backup'?: boolean;
    public mode?: string;
    private 'logical_cluster_name'?: string;
    private 'expand_with_existed_node'?: boolean;
    private 'create_node_only'?: boolean;
    private 'auto_redistribute'?: boolean;
    private 'is_scheduler_build_mode'?: boolean;
    private 'redis_conf'?: RedisConf;
    private 'build_task_info'?: BuildTaskInfo;
    private 'order_id'?: string;
    public constructor(scaleOut?: ScaleOut, forceBackup?: boolean, mode?: string, logicalClusterName?: string, expandWithExistedNode?: boolean, createNodeOnly?: boolean, autoRedistribute?: boolean, isSchedulerBuildMode?: boolean, redisConf?: RedisConf, buildTaskInfo?: BuildTaskInfo) { 
        this['scale_out'] = scaleOut;
        this['force_backup'] = forceBackup;
        this['mode'] = mode;
        this['logical_cluster_name'] = logicalClusterName;
        this['expand_with_existed_node'] = expandWithExistedNode;
        this['create_node_only'] = createNodeOnly;
        this['auto_redistribute'] = autoRedistribute;
        this['is_scheduler_build_mode'] = isSchedulerBuildMode;
        this['redis_conf'] = redisConf;
        this['build_task_info'] = buildTaskInfo;
    }
    public withScaleOut(scaleOut: ScaleOut): ResizeClusterWithExistedNodesRequestBody {
        this['scale_out'] = scaleOut;
        return this;
    }
    public set scaleOut(scaleOut: ScaleOut  | undefined) {
        this['scale_out'] = scaleOut;
    }
    public get scaleOut(): ScaleOut | undefined {
        return this['scale_out'];
    }
    public withResize(resize: Resize): ResizeClusterWithExistedNodesRequestBody {
        this['resize'] = resize;
        return this;
    }
    public withForceBackup(forceBackup: boolean): ResizeClusterWithExistedNodesRequestBody {
        this['force_backup'] = forceBackup;
        return this;
    }
    public set forceBackup(forceBackup: boolean  | undefined) {
        this['force_backup'] = forceBackup;
    }
    public get forceBackup(): boolean | undefined {
        return this['force_backup'];
    }
    public withMode(mode: string): ResizeClusterWithExistedNodesRequestBody {
        this['mode'] = mode;
        return this;
    }
    public withLogicalClusterName(logicalClusterName: string): ResizeClusterWithExistedNodesRequestBody {
        this['logical_cluster_name'] = logicalClusterName;
        return this;
    }
    public set logicalClusterName(logicalClusterName: string  | undefined) {
        this['logical_cluster_name'] = logicalClusterName;
    }
    public get logicalClusterName(): string | undefined {
        return this['logical_cluster_name'];
    }
    public withExpandWithExistedNode(expandWithExistedNode: boolean): ResizeClusterWithExistedNodesRequestBody {
        this['expand_with_existed_node'] = expandWithExistedNode;
        return this;
    }
    public set expandWithExistedNode(expandWithExistedNode: boolean  | undefined) {
        this['expand_with_existed_node'] = expandWithExistedNode;
    }
    public get expandWithExistedNode(): boolean | undefined {
        return this['expand_with_existed_node'];
    }
    public withCreateNodeOnly(createNodeOnly: boolean): ResizeClusterWithExistedNodesRequestBody {
        this['create_node_only'] = createNodeOnly;
        return this;
    }
    public set createNodeOnly(createNodeOnly: boolean  | undefined) {
        this['create_node_only'] = createNodeOnly;
    }
    public get createNodeOnly(): boolean | undefined {
        return this['create_node_only'];
    }
    public withAutoRedistribute(autoRedistribute: boolean): ResizeClusterWithExistedNodesRequestBody {
        this['auto_redistribute'] = autoRedistribute;
        return this;
    }
    public set autoRedistribute(autoRedistribute: boolean  | undefined) {
        this['auto_redistribute'] = autoRedistribute;
    }
    public get autoRedistribute(): boolean | undefined {
        return this['auto_redistribute'];
    }
    public withIsSchedulerBuildMode(isSchedulerBuildMode: boolean): ResizeClusterWithExistedNodesRequestBody {
        this['is_scheduler_build_mode'] = isSchedulerBuildMode;
        return this;
    }
    public set isSchedulerBuildMode(isSchedulerBuildMode: boolean  | undefined) {
        this['is_scheduler_build_mode'] = isSchedulerBuildMode;
    }
    public get isSchedulerBuildMode(): boolean | undefined {
        return this['is_scheduler_build_mode'];
    }
    public withRedisConf(redisConf: RedisConf): ResizeClusterWithExistedNodesRequestBody {
        this['redis_conf'] = redisConf;
        return this;
    }
    public set redisConf(redisConf: RedisConf  | undefined) {
        this['redis_conf'] = redisConf;
    }
    public get redisConf(): RedisConf | undefined {
        return this['redis_conf'];
    }
    public withBuildTaskInfo(buildTaskInfo: BuildTaskInfo): ResizeClusterWithExistedNodesRequestBody {
        this['build_task_info'] = buildTaskInfo;
        return this;
    }
    public set buildTaskInfo(buildTaskInfo: BuildTaskInfo  | undefined) {
        this['build_task_info'] = buildTaskInfo;
    }
    public get buildTaskInfo(): BuildTaskInfo | undefined {
        return this['build_task_info'];
    }
    public withOrderId(orderId: string): ResizeClusterWithExistedNodesRequestBody {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
}