import { NodeInfo } from './NodeInfo';


export class CmdbInfo {
    private 'app_id'?: string;
    private 'node_ids'?: Array<NodeInfo>;
    public constructor() { 
    }
    public withAppId(appId: string): CmdbInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withNodeIds(nodeIds: Array<NodeInfo>): CmdbInfo {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<NodeInfo>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<NodeInfo> | undefined {
        return this['node_ids'];
    }
}