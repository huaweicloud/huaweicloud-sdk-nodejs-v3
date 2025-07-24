import { AssetExportParam } from './AssetExportParam';


export class CommRequestAssetExportParam {
    public params?: AssetExportParam;
    public constructor(params?: AssetExportParam) { 
        this['params'] = params;
    }
    public withParams(params: AssetExportParam): CommRequestAssetExportParam {
        this['params'] = params;
        return this;
    }
}