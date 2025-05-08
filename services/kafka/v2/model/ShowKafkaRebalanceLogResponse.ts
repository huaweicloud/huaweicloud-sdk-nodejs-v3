
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKafkaRebalanceLogResponse extends SdkResponse {
    public id?: string;
    public instanceId?: string;
    public status?: string;
    public logStreamId?: string;
    public logGroupId?: string;
    public dashboardId?: string;
    public createAt?: string;
    public updateAt?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowKafkaRebalanceLogResponse {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ShowKafkaRebalanceLogResponse {
        this['instanceId'] = instanceId;
        return this;
    }
    public withStatus(status: string): ShowKafkaRebalanceLogResponse {
        this['status'] = status;
        return this;
    }
    public withLogStreamId(logStreamId: string): ShowKafkaRebalanceLogResponse {
        this['logStreamId'] = logStreamId;
        return this;
    }
    public withLogGroupId(logGroupId: string): ShowKafkaRebalanceLogResponse {
        this['logGroupId'] = logGroupId;
        return this;
    }
    public withDashboardId(dashboardId: string): ShowKafkaRebalanceLogResponse {
        this['dashboardId'] = dashboardId;
        return this;
    }
    public withCreateAt(createAt: string): ShowKafkaRebalanceLogResponse {
        this['createAt'] = createAt;
        return this;
    }
    public withUpdateAt(updateAt: string): ShowKafkaRebalanceLogResponse {
        this['updateAt'] = updateAt;
        return this;
    }
}