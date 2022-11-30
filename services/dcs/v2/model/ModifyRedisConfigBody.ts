import { RedisConfig } from './RedisConfig';


export class ModifyRedisConfigBody {
    private 'redis_config'?: Array<RedisConfig> | undefined;
    public constructor() { 
    }
    public withRedisConfig(redisConfig: Array<RedisConfig>): ModifyRedisConfigBody {
        this['redis_config'] = redisConfig;
        return this;
    }
    public set redisConfig(redisConfig: Array<RedisConfig> | undefined) {
        this['redis_config'] = redisConfig;
    }
    public get redisConfig() {
        return this['redis_config'];
    }
}