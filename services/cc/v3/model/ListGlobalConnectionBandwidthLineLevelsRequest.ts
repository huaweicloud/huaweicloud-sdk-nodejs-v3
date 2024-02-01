

export class ListGlobalConnectionBandwidthLineLevelsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'local_area'?: string;
    private 'remote_area'?: string;
    public levels?: Array<ListGlobalConnectionBandwidthLineLevelsRequestLevelsEnum> | Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListGlobalConnectionBandwidthLineLevelsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListGlobalConnectionBandwidthLineLevelsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListGlobalConnectionBandwidthLineLevelsRequest {
        this['id'] = id;
        return this;
    }
    public withLocalArea(localArea: string): ListGlobalConnectionBandwidthLineLevelsRequest {
        this['local_area'] = localArea;
        return this;
    }
    public set localArea(localArea: string  | undefined) {
        this['local_area'] = localArea;
    }
    public get localArea(): string | undefined {
        return this['local_area'];
    }
    public withRemoteArea(remoteArea: string): ListGlobalConnectionBandwidthLineLevelsRequest {
        this['remote_area'] = remoteArea;
        return this;
    }
    public set remoteArea(remoteArea: string  | undefined) {
        this['remote_area'] = remoteArea;
    }
    public get remoteArea(): string | undefined {
        return this['remote_area'];
    }
    public withLevels(levels: Array<ListGlobalConnectionBandwidthLineLevelsRequestLevelsEnum> | Array<string>): ListGlobalConnectionBandwidthLineLevelsRequest {
        this['levels'] = levels;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGlobalConnectionBandwidthLineLevelsRequestLevelsEnum {
    PT = 'Pt',
    AG = 'Ag'
}
