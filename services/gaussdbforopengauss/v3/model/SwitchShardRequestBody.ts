import { Shards } from './Shards';


export class SwitchShardRequestBody {
    public shards?: Array<Shards>;
    public constructor(shards?: Array<Shards>) { 
        this['shards'] = shards;
    }
    public withShards(shards: Array<Shards>): SwitchShardRequestBody {
        this['shards'] = shards;
        return this;
    }
}