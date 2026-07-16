import { PoolUpdateRequest } from './PoolUpdateRequest';


export class PatchPoolRequest {
    private 'pool_name'?: string;
    private 'X-ModelArts-User-ID'?: string;
    public body?: PoolUpdateRequest;
    public constructor(poolName?: string) { 
        this['pool_name'] = poolName;
    }
    public withPoolName(poolName: string): PatchPoolRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withXModelArtsUserID(xModelArtsUserID: string): PatchPoolRequest {
        this['X-ModelArts-User-ID'] = xModelArtsUserID;
        return this;
    }
    public set xModelArtsUserID(xModelArtsUserID: string  | undefined) {
        this['X-ModelArts-User-ID'] = xModelArtsUserID;
    }
    public get xModelArtsUserID(): string | undefined {
        return this['X-ModelArts-User-ID'];
    }
    public withBody(body: PoolUpdateRequest): PatchPoolRequest {
        this['body'] = body;
        return this;
    }
}