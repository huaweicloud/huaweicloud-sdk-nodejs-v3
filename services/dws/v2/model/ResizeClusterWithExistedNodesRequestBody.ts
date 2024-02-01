import { RedisConfReq } from './RedisConfReq';
import { ScaleOut } from './ScaleOut';


export class ResizeClusterWithExistedNodesRequestBody {
    private 'scale_out'?: ScaleOut;
    private 'force_backup'?: boolean;
    public mode?: string;
    private 'logical_cluster_name'?: string;
    private 'expand_with_existed_node'?: boolean;
    private 'auto_redistribute'?: boolean;
    private 'redis_conf'?: RedisConfReq;
    public constructor(scaleOut?: ScaleOut, expandWithExistedNode?: boolean) { 
        this['scale_out'] = scaleOut;
        this['expand_with_existed_node'] = expandWithExistedNode;
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
    public withRedisConf(redisConf: RedisConfReq): ResizeClusterWithExistedNodesRequestBody {
        this['redis_conf'] = redisConf;
        return this;
    }
    public set redisConf(redisConf: RedisConfReq  | undefined) {
        this['redis_conf'] = redisConf;
    }
    public get redisConf(): RedisConfReq | undefined {
        return this['redis_conf'];
    }
}