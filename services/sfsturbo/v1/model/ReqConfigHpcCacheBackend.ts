import { ReqUpdateHpcCacheInfo } from './ReqUpdateHpcCacheInfo';


export class ReqConfigHpcCacheBackend {
    private 'update_hpc_cache'?: ReqUpdateHpcCacheInfo;
    public constructor(updateHpcCache?: ReqUpdateHpcCacheInfo) { 
        this['update_hpc_cache'] = updateHpcCache;
    }
    public withUpdateHpcCache(updateHpcCache: ReqUpdateHpcCacheInfo): ReqConfigHpcCacheBackend {
        this['update_hpc_cache'] = updateHpcCache;
        return this;
    }
    public set updateHpcCache(updateHpcCache: ReqUpdateHpcCacheInfo  | undefined) {
        this['update_hpc_cache'] = updateHpcCache;
    }
    public get updateHpcCache(): ReqUpdateHpcCacheInfo | undefined {
        return this['update_hpc_cache'];
    }
}