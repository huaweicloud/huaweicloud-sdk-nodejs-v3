
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgenciesTaskResponse extends SdkResponse {
    private 'operate_type'?: ShowAgenciesTaskResponseOperateTypeEnum | undefined;
    public constructor() { 
        super();
    }
    public withOperateType(operateType: ShowAgenciesTaskResponseOperateTypeEnum): ShowAgenciesTaskResponse {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: ShowAgenciesTaskResponseOperateTypeEnum | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType() {
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
