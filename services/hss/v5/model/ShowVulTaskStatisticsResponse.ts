
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVulTaskStatisticsResponse extends SdkResponse {
    private 'unread_task_num'?: number;
    public constructor() { 
        super();
    }
    public withUnreadTaskNum(unreadTaskNum: number): ShowVulTaskStatisticsResponse {
        this['unread_task_num'] = unreadTaskNum;
        return this;
    }
    public set unreadTaskNum(unreadTaskNum: number  | undefined) {
        this['unread_task_num'] = unreadTaskNum;
    }
    public get unreadTaskNum(): number | undefined {
        return this['unread_task_num'];
    }
}