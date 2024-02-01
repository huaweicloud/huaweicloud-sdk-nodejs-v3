

export class ListGlobalConnectionBandwidthSpecCodesRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'local_area'?: string;
    private 'remote_area'?: string;
    public level?: Array<ListGlobalConnectionBandwidthSpecCodesRequestLevelEnum> | Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalConnectionBandwidthSpecCodesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListGlobalConnectionBandwidthSpecCodesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListGlobalConnectionBandwidthSpecCodesRequest {
        this['id'] = id;
        return this;
    }
    public withLocalArea(localArea: string): ListGlobalConnectionBandwidthSpecCodesRequest {
        this['local_area'] = localArea;
        return this;
    }
    public set localArea(localArea: string  | undefined) {
        this['local_area'] = localArea;
    }
    public get localArea(): string | undefined {
        return this['local_area'];
    }
    public withRemoteArea(remoteArea: string): ListGlobalConnectionBandwidthSpecCodesRequest {
        this['remote_area'] = remoteArea;
        return this;
    }
    public set remoteArea(remoteArea: string  | undefined) {
        this['remote_area'] = remoteArea;
    }
    public get remoteArea(): string | undefined {
        return this['remote_area'];
    }
    public withLevel(level: Array<ListGlobalConnectionBandwidthSpecCodesRequestLevelEnum> | Array<string>): ListGlobalConnectionBandwidthSpecCodesRequest {
        this['level'] = level;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthSpecCodesRequestLevelEnum {
    PT = 'Pt',
    AU = 'Au',
    AG = 'Ag'
}
