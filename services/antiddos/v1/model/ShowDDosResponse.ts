
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDDosResponse extends SdkResponse {
    private 'enable_L7'?: boolean;
    private 'traffic_pos_id'?: number;
    private 'http_request_pos_id'?: number;
    private 'cleaning_access_pos_id'?: number;
    private 'app_type_id'?: number;
    public constructor() { 
        super();
    }
    public withEnableL7(enableL7: boolean): ShowDDosResponse {
        this['enable_L7'] = enableL7;
        return this;
    }
    public set enableL7(enableL7: boolean  | undefined) {
        this['enable_L7'] = enableL7;
    }
    public get enableL7(): boolean | undefined {
        return this['enable_L7'];
    }
    public withTrafficPosId(trafficPosId: number): ShowDDosResponse {
        this['traffic_pos_id'] = trafficPosId;
        return this;
    }
    public set trafficPosId(trafficPosId: number  | undefined) {
        this['traffic_pos_id'] = trafficPosId;
    }
    public get trafficPosId(): number | undefined {
        return this['traffic_pos_id'];
    }
    public withHttpRequestPosId(httpRequestPosId: number): ShowDDosResponse {
        this['http_request_pos_id'] = httpRequestPosId;
        return this;
    }
    public set httpRequestPosId(httpRequestPosId: number  | undefined) {
        this['http_request_pos_id'] = httpRequestPosId;
    }
    public get httpRequestPosId(): number | undefined {
        return this['http_request_pos_id'];
    }
    public withCleaningAccessPosId(cleaningAccessPosId: number): ShowDDosResponse {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
        return this;
    }
    public set cleaningAccessPosId(cleaningAccessPosId: number  | undefined) {
        this['cleaning_access_pos_id'] = cleaningAccessPosId;
    }
    public get cleaningAccessPosId(): number | undefined {
        return this['cleaning_access_pos_id'];
    }
    public withAppTypeId(appTypeId: number): ShowDDosResponse {
        this['app_type_id'] = appTypeId;
        return this;
    }
    public set appTypeId(appTypeId: number  | undefined) {
        this['app_type_id'] = appTypeId;
    }
    public get appTypeId(): number | undefined {
        return this['app_type_id'];
    }
}