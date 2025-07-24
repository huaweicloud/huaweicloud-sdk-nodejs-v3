import { AssetTree } from './AssetTree';


export class CommRequestAssetTree {
    public params?: AssetTree;
    public constructor() { 
    }
    public withParams(params: AssetTree): CommRequestAssetTree {
        this['params'] = params;
        return this;
    }
}