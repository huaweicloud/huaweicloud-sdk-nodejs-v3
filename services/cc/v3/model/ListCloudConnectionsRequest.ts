

export class ListCloudConnectionsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'enterprise_project_id'?: Array<string>;
    public status?: Array<ListCloudConnectionsRequestStatusEnum> | Array<string>;
    public type?: Array<string>;
    private 'used_scene'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListCloudConnectionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCloudConnectionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListCloudConnectionsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListCloudConnectionsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListCloudConnectionsRequest {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: Array<string>): ListCloudConnectionsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: Array<string>  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): Array<string> | undefined {
        return this['enterprise_project_id'];
    }
    public withStatus(status: Array<ListCloudConnectionsRequestStatusEnum> | Array<string>): ListCloudConnectionsRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: Array<string>): ListCloudConnectionsRequest {
        this['type'] = type;
        return this;
    }
    public withUsedScene(usedScene: Array<string>): ListCloudConnectionsRequest {
        this['used_scene'] = usedScene;
        return this;
    }
    public set usedScene(usedScene: Array<string>  | undefined) {
        this['used_scene'] = usedScene;
    }
    public get usedScene(): Array<string> | undefined {
        return this['used_scene'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCloudConnectionsRequestStatusEnum {
    ACTIVE = 'ACTIVE'
}
