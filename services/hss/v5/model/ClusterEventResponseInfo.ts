import { ClusterEventResourceResponseInfo } from './ClusterEventResourceResponseInfo';


export class ClusterEventResponseInfo {
    public action?: string;
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'event_name'?: string;
    private 'event_class_id'?: string;
    private 'event_id'?: string;
    private 'event_type'?: number;
    private 'event_content'?: string;
    private 'handle_status'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    private 'resource_info'?: ClusterEventResourceResponseInfo;
    public constructor() { 
    }
    public withAction(action: string): ClusterEventResponseInfo {
        this['action'] = action;
        return this;
    }
    public withClusterName(clusterName: string): ClusterEventResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ClusterEventResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withEventName(eventName: string): ClusterEventResponseInfo {
        this['event_name'] = eventName;
        return this;
    }
    public set eventName(eventName: string  | undefined) {
        this['event_name'] = eventName;
    }
    public get eventName(): string | undefined {
        return this['event_name'];
    }
    public withEventClassId(eventClassId: string): ClusterEventResponseInfo {
        this['event_class_id'] = eventClassId;
        return this;
    }
    public set eventClassId(eventClassId: string  | undefined) {
        this['event_class_id'] = eventClassId;
    }
    public get eventClassId(): string | undefined {
        return this['event_class_id'];
    }
    public withEventId(eventId: string): ClusterEventResponseInfo {
        this['event_id'] = eventId;
        return this;
    }
    public set eventId(eventId: string  | undefined) {
        this['event_id'] = eventId;
    }
    public get eventId(): string | undefined {
        return this['event_id'];
    }
    public withEventType(eventType: number): ClusterEventResponseInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
    public withEventContent(eventContent: string): ClusterEventResponseInfo {
        this['event_content'] = eventContent;
        return this;
    }
    public set eventContent(eventContent: string  | undefined) {
        this['event_content'] = eventContent;
    }
    public get eventContent(): string | undefined {
        return this['event_content'];
    }
    public withHandleStatus(handleStatus: string): ClusterEventResponseInfo {
        this['handle_status'] = handleStatus;
        return this;
    }
    public set handleStatus(handleStatus: string  | undefined) {
        this['handle_status'] = handleStatus;
    }
    public get handleStatus(): string | undefined {
        return this['handle_status'];
    }
    public withCreateTime(createTime: number): ClusterEventResponseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ClusterEventResponseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withProjectId(projectId: string): ClusterEventResponseInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ClusterEventResponseInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withPolicyName(policyName: string): ClusterEventResponseInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): ClusterEventResponseInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withResourceInfo(resourceInfo: ClusterEventResourceResponseInfo): ClusterEventResponseInfo {
        this['resource_info'] = resourceInfo;
        return this;
    }
    public set resourceInfo(resourceInfo: ClusterEventResourceResponseInfo  | undefined) {
        this['resource_info'] = resourceInfo;
    }
    public get resourceInfo(): ClusterEventResourceResponseInfo | undefined {
        return this['resource_info'];
    }
}