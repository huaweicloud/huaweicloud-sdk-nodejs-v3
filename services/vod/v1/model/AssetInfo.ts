import { BaseInfo } from './BaseInfo';
import { PlayInfo } from './PlayInfo';


export class AssetInfo {
    private 'asset_id'?: string | undefined;
    public status?: string;
    public description?: string;
    private 'base_info'?: BaseInfo | undefined;
    private 'play_info_array'?: Array<PlayInfo> | undefined;
    public constructor() { 
    }
    public withAssetId(assetId: string): AssetInfo {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId() {
        return this['asset_id'];
    }
    public withStatus(status: string): AssetInfo {
        this['status'] = status;
        return this;
    }
    public withDescription(description: string): AssetInfo {
        this['description'] = description;
        return this;
    }
    public withBaseInfo(baseInfo: BaseInfo): AssetInfo {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: BaseInfo | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo() {
        return this['base_info'];
    }
    public withPlayInfoArray(playInfoArray: Array<PlayInfo>): AssetInfo {
        this['play_info_array'] = playInfoArray;
        return this;
    }
    public set playInfoArray(playInfoArray: Array<PlayInfo> | undefined) {
        this['play_info_array'] = playInfoArray;
    }
    public get playInfoArray() {
        return this['play_info_array'];
    }
}