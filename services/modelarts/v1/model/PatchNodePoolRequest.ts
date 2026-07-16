import { PatchNodePoolRequestBody } from './PatchNodePoolRequestBody';


export class PatchNodePoolRequest {
    private 'pool_name'?: string;
    private 'nodepool_name'?: string;
    public body?: PatchNodePoolRequestBody;
    public constructor(poolName?: string, nodepoolName?: string) { 
        this['pool_name'] = poolName;
        this['nodepool_name'] = nodepoolName;
    }
    public withPoolName(poolName: string): PatchNodePoolRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withNodepoolName(nodepoolName: string): PatchNodePoolRequest {
        this['nodepool_name'] = nodepoolName;
        return this;
    }
    public set nodepoolName(nodepoolName: string  | undefined) {
        this['nodepool_name'] = nodepoolName;
    }
    public get nodepoolName(): string | undefined {
        return this['nodepool_name'];
    }
    public withBody(body: PatchNodePoolRequestBody): PatchNodePoolRequest {
        this['body'] = body;
        return this;
    }
}