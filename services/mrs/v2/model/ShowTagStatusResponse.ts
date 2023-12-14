
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTagStatusResponse extends SdkResponse {
    public status?: ShowTagStatusResponseStatusEnum | string;
    private 'default_tags_enable'?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowTagStatusResponseStatusEnum | string): ShowTagStatusResponse {
        this['status'] = status;
        return this;
    }
    public withDefaultTagsEnable(defaultTagsEnable: boolean): ShowTagStatusResponse {
        this['default_tags_enable'] = defaultTagsEnable;
        return this;
    }
    public set defaultTagsEnable(defaultTagsEnable: boolean  | undefined) {
        this['default_tags_enable'] = defaultTagsEnable;
    }
    public get defaultTagsEnable(): boolean | undefined {
        return this['default_tags_enable'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTagStatusResponseStatusEnum {
    PROCESSING = 'processing',
    SUCCEED = 'succeed',
    FAILED = 'failed'
}
