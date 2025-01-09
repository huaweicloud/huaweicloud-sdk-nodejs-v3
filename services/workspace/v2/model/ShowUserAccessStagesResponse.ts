import { UserAccessStage } from './UserAccessStage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowUserAccessStagesResponse extends SdkResponse {
    public username?: string;
    private 'biz_type'?: ShowUserAccessStagesResponseBizTypeEnum | string;
    public stages?: Array<UserAccessStage>;
    public constructor() { 
        super();
    }
    public withUsername(username: string): ShowUserAccessStagesResponse {
        this['username'] = username;
        return this;
    }
    public withBizType(bizType: ShowUserAccessStagesResponseBizTypeEnum | string): ShowUserAccessStagesResponse {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: ShowUserAccessStagesResponseBizTypeEnum | string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): ShowUserAccessStagesResponseBizTypeEnum | string | undefined {
        return this['biz_type'];
    }
    public withStages(stages: Array<UserAccessStage>): ShowUserAccessStagesResponse {
        this['stages'] = stages;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowUserAccessStagesResponseBizTypeEnum {
    APP = 'APP',
    DESKTOP = 'DESKTOP'
}
