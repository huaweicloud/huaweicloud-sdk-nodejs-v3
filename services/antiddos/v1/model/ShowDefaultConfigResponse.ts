
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDefaultConfigResponse extends SdkResponse {
    private 'enable_L7'?: boolean;
    private 'traffic_pos_id'?: number;
    private 'http_request_pos_id'?: number;
    private 'cleaning_access_pos_id'?: number;
    private 'app_type_id'?: ShowDefaultConfigResponseAppTypeIdEnum | number;
    public constructor() { 
        super();
    }
    public withEnableL7(enableL7: boolean): ShowDefaultConfigResponse {
        this['enable_L7'] = enableL7;
        return this;
    }
    public set enableL7(enableL7: boolean  | undefined) {
        this['enable_L7'] = enableL7;
    }
    public get enableL7(): boolean | undefined {
        return this['enable_L7'];
    }
    public withTrafficPosId(trafficPosId: number): ShowDefaultConfigResponse {
        this['traffic_pos_id'] = trafficPosId;
        return this;
    }
    public set trafficPosId(trafficPosId: number  | undefined) {
        this['traffic_pos_id'] = trafficPosId;
    }
    public get trafficPosId(): number | undefined {
        return this['traffic_pos_id'];
    }
    public withHttpRequestPosId(httpRequestPosId: number): ShowDefaultConfigResponse {
        this['http_request_pos_id'] = httpRequestPosId;
        return this;
    }
    public set httpRequestPosId(httpRequestPosId: number  | undefined) {
        this['http_request_pos_id'] = httpRequestPosId;
    }
    public get httpRequestPosId(): number | undefined {
        return this['http_request_pos_id'];
    }
    public withCleaningAccessPosId(cleaningAccessPosId: number): ShowDefaultConfigResponse {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
        return this;
    }
    public set cleaningAccessPosId(cleaningAccessPosId: number  | undefined) {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
    }
    public get cleaningAccessPosId(): number | undefined {
        return this['cleaning_access_pos_id'];
    }
    public withAppTypeId(appTypeId: ShowDefaultConfigResponseAppTypeIdEnum | number): ShowDefaultConfigResponse {
        this['app_type_id'] = appTypeId;
        return this;
    }
    public set appTypeId(appTypeId: ShowDefaultConfigResponseAppTypeIdEnum | number  | undefined) {
        this['app_type_id'] = appTypeId;
    }
    public get appTypeId(): ShowDefaultConfigResponseAppTypeIdEnum | number | undefined {
        return this['app_type_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDefaultConfigResponseAppTypeIdEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
