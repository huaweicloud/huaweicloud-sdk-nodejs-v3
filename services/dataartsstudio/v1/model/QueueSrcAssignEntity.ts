

export class QueueSrcAssignEntity {
    public id?: string;
    private 'source_type'?: string;
    private 'queue_name'?: string;
    private 'queue_type'?: string;
    private 'queue_attr'?: number;
    private 'conn_id'?: string;
    private 'conn_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    private 'project_id'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): QueueSrcAssignEntity {
        this['id'] = id;
        return this;
    }
    public withSourceType(sourceType: string): QueueSrcAssignEntity {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withQueueName(queueName: string): QueueSrcAssignEntity {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withQueueType(queueType: string): QueueSrcAssignEntity {
        this['queue_type'] = queueType;
        return this;
    }
    public set queueType(queueType: string  | undefined) {
        this['queue_type'] = queueType;
    }
    public get queueType(): string | undefined {
        return this['queue_type'];
    }
    public withQueueAttr(queueAttr: number): QueueSrcAssignEntity {
        this['queue_attr'] = queueAttr;
        return this;
    }
    public set queueAttr(queueAttr: number  | undefined) {
        this['queue_attr'] = queueAttr;
    }
    public get queueAttr(): number | undefined {
        return this['queue_attr'];
    }
    public withConnId(connId: string): QueueSrcAssignEntity {
        this['conn_id'] = connId;
        return this;
    }
    public set connId(connId: string  | undefined) {
        this['conn_id'] = connId;
    }
    public get connId(): string | undefined {
        return this['conn_id'];
    }
    public withConnName(connName: string): QueueSrcAssignEntity {
        this['conn_name'] = connName;
        return this;
    }
    public set connName(connName: string  | undefined) {
        this['conn_name'] = connName;
    }
    public get connName(): string | undefined {
        return this['conn_name'];
    }
    public withClusterId(clusterId: string): QueueSrcAssignEntity {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): QueueSrcAssignEntity {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withCreateTime(createTime: number): QueueSrcAssignEntity {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): QueueSrcAssignEntity {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): QueueSrcAssignEntity {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): QueueSrcAssignEntity {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withProjectId(projectId: string): QueueSrcAssignEntity {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDescription(description: string): QueueSrcAssignEntity {
        this['description'] = description;
        return this;
    }
}