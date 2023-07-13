import { Parameter } from './Parameter';


export class ExtractAudioTaskReq {
    private 'asset_id': string | undefined;
    public parameter?: Parameter;
    public constructor(assetId?: any) { 
        this['asset_id'] = assetId;
    }
    public withAssetId(assetId: string): ExtractAudioTaskReq {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withParameter(parameter: Parameter): ExtractAudioTaskReq {
        this['parameter'] = parameter;
        return this;
    }
}