import { NodeconfigUpdate } from './NodeconfigUpdate';


export class PatchNodeConfigRequest {
    private 'pool_name'?: string;
    public body?: NodeconfigUpdate;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): PatchNodeConfigRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withBody(body: NodeconfigUpdate): PatchNodeConfigRequest {
        this['body'] = body;
        return this;
    }
}