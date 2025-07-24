import { UpdateAssetTreeParam } from './UpdateAssetTreeParam';


export class CommRequestUpdateAssetTreeParam {
    public params?: UpdateAssetTreeParam;
    public constructor(params?: UpdateAssetTreeParam) { 
        this['params'] = params;
    }
    public withParams(params: UpdateAssetTreeParam): CommRequestUpdateAssetTreeParam {
        this['params'] = params;
        return this;
    }
}