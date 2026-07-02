import { ShowKafkaLogTaskEntity } from './ShowKafkaLogTaskEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaLogTaskResponse extends SdkResponse {
    private 'log_response_list'?: Array<ShowKafkaLogTaskEntity>;
    public constructor() { 
        super();
    }
    public withLogResponseList(logResponseList: Array<ShowKafkaLogTaskEntity>): ShowKafkaLogTaskResponse {
        this['log_response_list'] = logResponseList;
        return this;
    }
    public set logResponseList(logResponseList: Array<ShowKafkaLogTaskEntity>  | undefined) {
        this['log_response_list'] = logResponseList;
    }
    public get logResponseList(): Array<ShowKafkaLogTaskEntity> | undefined {
        return this['log_response_list'];
    }
}