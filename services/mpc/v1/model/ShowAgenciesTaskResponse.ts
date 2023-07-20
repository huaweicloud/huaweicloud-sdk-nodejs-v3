
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgenciesTaskResponse extends SdkResponse {
    private 'operate_type'?: ShowAgenciesTaskResponseOperateTypeEnum | string;
    public constructor() { 
        super();
    }
    public withOperateType(operateType: ShowAgenciesTaskResponseOperateTypeEnum | string): ShowAgenciesTaskResponse {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: ShowAgenciesTaskResponseOperateTypeEnum | string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): ShowAgenciesTaskResponseOperateTypeEnum | string | undefined {
        return this['operate_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAgenciesTaskResponseOperateTypeEnum {
    CREATED = 'CREATED',
    CANCELED = 'CANCELED'
}
