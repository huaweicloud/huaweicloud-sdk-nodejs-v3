import { QueueSrcAssignEntity } from './QueueSrcAssignEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityAssignedQueuesResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'queue_sources'?: Array<QueueSrcAssignEntity>;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): ListSecurityAssignedQueuesResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withQueueSources(queueSources: Array<QueueSrcAssignEntity>): ListSecurityAssignedQueuesResponse {
        this['queue_sources'] = queueSources;
        return this;
    }
    public set queueSources(queueSources: Array<QueueSrcAssignEntity>  | undefined) {
        this['queue_sources'] = queueSources;
    }
    public get queueSources(): Array<QueueSrcAssignEntity> | undefined {
        return this['queue_sources'];
    }
}