import { ListQueriesCondition } from './ListQueriesCondition';


export class ListQueriesRequestBody {
    private 'cluster_id'?: string;
    private 'project_id'?: string;
    public offset?: string;
    public limit?: string;
    public conditions?: Array<ListQueriesCondition>;
    private 'order_by'?: string;
    public target?: string;
    public constructor(clusterId?: string, projectId?: string, offset?: string, limit?: string, conditions?: Array<ListQueriesCondition>, target?: string) { 
        this['cluster_id'] = clusterId;
        this['project_id'] = projectId;
        this['offset'] = offset;
        this['limit'] = limit;
        this['conditions'] = conditions;
        this['target'] = target;
    }
    public withClusterId(clusterId: string): ListQueriesRequestBody {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withProjectId(projectId: string): ListQueriesRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOffset(offset: string): ListQueriesRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListQueriesRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withConditions(conditions: Array<ListQueriesCondition>): ListQueriesRequestBody {
        this['conditions'] = conditions;
        return this;
    }
    public withOrderBy(orderBy: string): ListQueriesRequestBody {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withTarget(target: string): ListQueriesRequestBody {
        this['target'] = target;
        return this;
    }
}