import { SyncResourceAgentReqResourceInfos } from './SyncResourceAgentReqResourceInfos';


export class SyncResourceAgentReq {
    private 'resource_infos'?: Array<SyncResourceAgentReqResourceInfos>;
    public vendor?: string;
    public constructor() { 
    }
    public withResourceInfos(resourceInfos: Array<SyncResourceAgentReqResourceInfos>): SyncResourceAgentReq {
        this['resource_infos'] = resourceInfos;
        return this;
    }
    public set resourceInfos(resourceInfos: Array<SyncResourceAgentReqResourceInfos>  | undefined) {
        this['resource_infos'] = resourceInfos;
    }
    public get resourceInfos(): Array<SyncResourceAgentReqResourceInfos> | undefined {
        return this['resource_infos'];
    }
    public withVendor(vendor: string): SyncResourceAgentReq {
        this['vendor'] = vendor;
        return this;
    }
}