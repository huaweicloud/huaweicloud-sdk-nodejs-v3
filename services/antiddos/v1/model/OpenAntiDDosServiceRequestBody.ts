

export class OpenAntiDDosServiceRequestBody {
    private 'app_type_id'?: OpenAntiDDosServiceRequestBodyAppTypeIdEnum | number;
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
    public withAppTypeId(appTypeId: OpenAntiDDosServiceRequestBodyAppTypeIdEnum | number): OpenAntiDDosServiceRequestBody {
        this['app_type_id'] = appTypeId;
        return this;
    }
    public set appTypeId(appTypeId: OpenAntiDDosServiceRequestBodyAppTypeIdEnum | number  | undefined) {
        this['app_type_id'] = appTypeId;
    }
    public get appTypeId(): OpenAntiDDosServiceRequestBodyAppTypeIdEnum | number | undefined {
        return this['app_type_id'];
    }
    public withCleaningAccessPosId(cleaningAccessPosId: number): OpenAntiDDosServiceRequestBody {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
        return this;
    }
    public set cleaningAccessPosId(cleaningAccessPosId: number  | undefined) {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
    }
    public get cleaningAccessPosId(): number | undefined {
        return this['cleaning_access_pos_id'];
    }
    public withEnableL7(enableL7: boolean): OpenAntiDDosServiceRequestBody {
        this['enable_L7'] = enableL7;
        return this;
    }
    public set enableL7(enableL7: boolean  | undefined) {
        this['enable_L7'] = enableL7;
    }
    public get enableL7(): boolean | undefined {
        return this['enable_L7'];
    }
    public withHttpRequestPosId(httpRequestPosId: number): OpenAntiDDosServiceRequestBody {
        this['http_request_pos_id'] = httpRequestPosId;
        return this;
    }
    public set httpRequestPosId(httpRequestPosId: number  | undefined) {
        this['http_request_pos_id'] = httpRequestPosId;
    }
    public get httpRequestPosId(): number | undefined {
        return this['http_request_pos_id'];
    }
    public withTrafficPosId(trafficPosId: number): OpenAntiDDosServiceRequestBody {
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

/**
    * @export
    * @enum {string}
    */
export enum OpenAntiDDosServiceRequestBodyAppTypeIdEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
