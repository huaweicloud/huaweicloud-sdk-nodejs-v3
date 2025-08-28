
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHealthReportTaskResponse extends SdkResponse {
    private 'create_success'?: boolean;
    public constructor() { 
        super();
    }
    public withCreateSuccess(createSuccess: boolean): CreateHealthReportTaskResponse {
        this['create_success'] = createSuccess;
        return this;
    }
    public set createSuccess(createSuccess: boolean  | undefined) {
        this['create_success'] = createSuccess;
    }
    public get createSuccess(): boolean | undefined {
        return this['create_success'];
    }
}