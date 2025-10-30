

export class AssociateHostAssetValueRequestInfo {
    private 'asset_value'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(assetValue?: string, hostIdList?: Array<string>) { 
        this['asset_value'] = assetValue;
        this['host_id_list'] = hostIdList;
    }
    public withAssetValue(assetValue: string): AssociateHostAssetValueRequestInfo {
        this['asset_value'] = assetValue;
        return this;
    }
    public set assetValue(assetValue: string  | undefined) {
        this['asset_value'] = assetValue;
    }
    public get assetValue(): string | undefined {
        return this['asset_value'];
    }
    public withHostIdList(hostIdList: Array<string>): AssociateHostAssetValueRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}