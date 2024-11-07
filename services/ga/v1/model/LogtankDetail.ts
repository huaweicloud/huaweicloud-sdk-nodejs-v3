import { ConfigStatus } from './ConfigStatus';
import { LogtankResourceType } from './LogtankResourceType';


export class LogtankDetail {
    public id?: string;
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'resource_type'?: LogtankResourceType;
    private 'resource_id'?: string;
    private 'log_group_id'?: string;
    private 'log_stream_id'?: string;
    public status?: ConfigStatus;
    private 'created_at'?: Date;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: string): LogtankDetail {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): LogtankDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): LogtankDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withResourceType(resourceType: LogtankResourceType): LogtankDetail {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: LogtankResourceType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): LogtankResourceType | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): LogtankDetail {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withLogGroupId(logGroupId: string): LogtankDetail {
        this['log_group_id'] = logGroupId;
        return this;
    }
    public set logGroupId(logGroupId: string  | undefined) {
        this['log_group_id'] = logGroupId;
    }
    public get logGroupId(): string | undefined {
        return this['log_group_id'];
    }
    public withLogStreamId(logStreamId: string): LogtankDetail {
        this['log_stream_id'] = logStreamId;
        return this;
    }
    public set logStreamId(logStreamId: string  | undefined) {
        this['log_stream_id'] = logStreamId;
    }
    public get logStreamId(): string | undefined {
        return this['log_stream_id'];
    }
    public withStatus(status: ConfigStatus): LogtankDetail {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: Date): LogtankDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): LogtankDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}