
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteMigrationTaskResponse extends SdkResponse {
    private 'task_id_list'?: Array<string> | undefined;
    public constructor() { 
        super();
    }
    public withTaskIdList(taskIdList: Array<string>): DeleteMigrationTaskResponse {
        this['task_id_list'] = taskIdList;
        return this;
    }
    public set taskIdList(taskIdList: Array<string> | undefined) {
        this['task_id_list'] = taskIdList;
    }
    public get taskIdList() {
        return this['task_id_list'];
    }
}