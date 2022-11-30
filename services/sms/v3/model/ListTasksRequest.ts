

export class ListTasksRequest {
    public state?: ListTasksRequestStateEnum;
    public name?: string;
    public id?: string;
    private 'source_server_id'?: string | undefined;
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withState(state: ListTasksRequestStateEnum): ListTasksRequest {
        this['state'] = state;
        return this;
    }
    public withName(name: string): ListTasksRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ListTasksRequest {
        this['id'] = id;
        return this;
    }
    public withSourceServerId(sourceServerId: string): ListTasksRequest {
        this['source_server_id'] = sourceServerId;
        return this;
    }
    public set sourceServerId(sourceServerId: string | undefined) {
        this['source_server_id'] = sourceServerId;
    }
    public get sourceServerId() {
        return this['source_server_id'];
    }
    public withLimit(limit: number): ListTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTasksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTasksRequestStateEnum {
    READY = 'READY',
    RUNNING = 'RUNNING',
    SYNCING = 'SYNCING',
    MIGRATE_SUCCESS = 'MIGRATE_SUCCESS',
    MIGRATE_FAIL = 'MIGRATE_FAIL',
    ABORTING = 'ABORTING',
    ABORT = 'ABORT',
    DELETING = 'DELETING',
    SYNC_F_ROLLBACKING = 'SYNC_F_ROLLBACKING',
    SYNC_F_ROLLBACK_SUCCESS = 'SYNC_F_ROLLBACK_SUCCESS'
}
