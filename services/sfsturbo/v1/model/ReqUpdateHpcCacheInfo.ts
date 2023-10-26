import { ReqUpdateHpcCacheData } from './ReqUpdateHpcCacheData';


export class ReqUpdateHpcCacheInfo {
    public action?: string;
    public data?: ReqUpdateHpcCacheData;
    public constructor(action?: string, data?: ReqUpdateHpcCacheData) { 
        this['action'] = action;
        this['data'] = data;
    }
    public withAction(action: string): ReqUpdateHpcCacheInfo {
        this['action'] = action;
        return this;
    }
    public withData(data: ReqUpdateHpcCacheData): ReqUpdateHpcCacheInfo {
        this['data'] = data;
        return this;
    }
}