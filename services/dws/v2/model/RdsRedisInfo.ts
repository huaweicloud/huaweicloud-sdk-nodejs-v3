import { RedisConf } from './RedisConf';
import { RedisProgress } from './RedisProgress';
import { RedisTableDetail } from './RedisTableDetail';


export class RdsRedisInfo {
    public id?: string;
    private 'cluster_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    private 'redis_conf'?: RedisConf;
    private 'redis_progress'?: RedisProgress;
    private 'redis_table_detail'?: RedisTableDetail;
    public constructor() { 
    }
    public withId(id: string): RdsRedisInfo {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): RdsRedisInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withStartTime(startTime: string): RdsRedisInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): RdsRedisInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): RdsRedisInfo {
        this['status'] = status;
        return this;
    }
    public withRedisConf(redisConf: RedisConf): RdsRedisInfo {
        this['redis_conf'] = redisConf;
        return this;
    }
    public set redisConf(redisConf: RedisConf  | undefined) {
        this['redis_conf'] = redisConf;
    }
    public get redisConf(): RedisConf | undefined {
        return this['redis_conf'];
    }
    public withRedisProgress(redisProgress: RedisProgress): RdsRedisInfo {
        this['redis_progress'] = redisProgress;
        return this;
    }
    public set redisProgress(redisProgress: RedisProgress  | undefined) {
        this['redis_progress'] = redisProgress;
    }
    public get redisProgress(): RedisProgress | undefined {
        return this['redis_progress'];
    }
    public withRedisTableDetail(redisTableDetail: RedisTableDetail): RdsRedisInfo {
        this['redis_table_detail'] = redisTableDetail;
        return this;
    }
    public set redisTableDetail(redisTableDetail: RedisTableDetail  | undefined) {
        this['redis_table_detail'] = redisTableDetail;
    }
    public get redisTableDetail(): RedisTableDetail | undefined {
        return this['redis_table_detail'];
    }
}