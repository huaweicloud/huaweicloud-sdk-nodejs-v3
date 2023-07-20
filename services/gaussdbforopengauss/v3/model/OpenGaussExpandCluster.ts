import { OpenGaussCoordinators } from './OpenGaussCoordinators';
import { OpenGaussShard } from './OpenGaussShard';


export class OpenGaussExpandCluster {
    public coordinators?: Array<OpenGaussCoordinators>;
    public shard?: OpenGaussShard;
    public constructor() { 
    }
    public withCoordinators(coordinators: Array<OpenGaussCoordinators>): OpenGaussExpandCluster {
        this['coordinators'] = coordinators;
        return this;
    }
    public withShard(shard: OpenGaussShard): OpenGaussExpandCluster {
        this['shard'] = shard;
        return this;
    }
}