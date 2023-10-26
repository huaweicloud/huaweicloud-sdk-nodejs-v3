

export class UpdateAntiDDosServiceRequestBody {
    private 'app_type_id'?: number;
    private 'cleaning_access_pos_id'?: number;
    private 'enable_L7'?: boolean;
    private 'http_request_pos_id'?: number;
    private 'traffic_pos_id'?: number;
    public constructor(appTypeId?: number, cleaningAccessPosId?: number, enableL7?: boolean, httpRequestPosId?: number, trafficPosId?: number) { 
        this['app_type_id'] = appTypeId;
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
        this['enable_L7'] = enableL7;
        this['http_request_pos_id'] = httpRequestPosId;
        this['traffic_pos_id'] = trafficPosId;
    }
    public withAppTypeId(appTypeId: number): UpdateAntiDDosServiceRequestBody {
        this['app_type_id'] = appTypeId;
        return this;
    }
    public set appTypeId(appTypeId: number  | undefined) {
        this['app_type_id'] = appTypeId;
    }
    public get appTypeId(): number | undefined {
        return this['app_type_id'];
    }
    public withCleaningAccessPosId(cleaningAccessPosId: number): UpdateAntiDDosServiceRequestBody {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
        return this;
    }
    public set cleaningAccessPosId(cleaningAccessPosId: number  | undefined) {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
    }
    public get cleaningAccessPosId(): number | undefined {
        return this['cleaning_access_pos_id'];
    }
    public withEnableL7(enableL7: boolean): UpdateAntiDDosServiceRequestBody {
        this['enable_L7'] = enableL7;
        return this;
    }
    public set enableL7(enableL7: boolean  | undefined) {
        this['enable_L7'] = enableL7;
    }
    public get enableL7(): boolean | undefined {
        return this['enable_L7'];
    }
    public withHttpRequestPosId(httpRequestPosId: number): UpdateAntiDDosServiceRequestBody {
        this['http_request_pos_id'] = httpRequestPosId;
        return this;
    }
    public set httpRequestPosId(httpRequestPosId: number  | undefined) {
        this['http_request_pos_id'] = httpRequestPosId;
    }
    public get httpRequestPosId(): number | undefined {
        return this['http_request_pos_id'];
    }
    public withTrafficPosId(trafficPosId: number): UpdateAntiDDosServiceRequestBody {
        this['traffic_pos_id'] = trafficPosId;
        return this;
    }
    public set trafficPosId(trafficPosId: number  | undefined) {
        this['traffic_pos_id'] = trafficPosId;
    }
    public get trafficPosId(): number | undefined {
        return this['traffic_pos_id'];
    }
}