
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteRocketMqMigrationTaskResponse extends SdkResponse {
    private 'success_task_list'?: Array<string>;
    public constructor() { 
        super();
    }
    public withSuccessTaskList(successTaskList: Array<string>): DeleteRocketMqMigrationTaskResponse {
        this['success_task_list'] = successTaskList;
        return this;
    }
    public set successTaskList(successTaskList: Array<string>  | undefined) {
        this['success_task_list'] = successTaskList;
    }
    public get successTaskList(): Array<string> | undefined {
        return this['success_task_list'];
    }
}