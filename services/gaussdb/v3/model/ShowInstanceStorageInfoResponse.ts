
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceStorageInfoResponse extends SdkResponse {
    public used?: number;
    private 'prepaid_size'?: number;
    public limit?: number;
    public type?: ShowInstanceStorageInfoResponseTypeEnum | string;
    public constructor() { 
        super();
    }
    public withUsed(used: number): ShowInstanceStorageInfoResponse {
        this['used'] = used;
        return this;
    }
    public withPrepaidSize(prepaidSize: number): ShowInstanceStorageInfoResponse {
        this['prepaid_size'] = prepaidSize;
        return this;
    }
    public set prepaidSize(prepaidSize: number  | undefined) {
        this['prepaid_size'] = prepaidSize;
    }
    public get prepaidSize(): number | undefined {
        return this['prepaid_size'];
    }
    public withLimit(limit: number): ShowInstanceStorageInfoResponse {
        this['limit'] = limit;
        return this;
    }
    public withType(type: ShowInstanceStorageInfoResponseTypeEnum | string): ShowInstanceStorageInfoResponse {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceStorageInfoResponseTypeEnum {
    POOL = 'POOL',
    STANDARDPOOL = 'STANDARDPOOL'
}
