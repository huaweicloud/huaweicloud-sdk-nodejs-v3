

export class ListIpsSwitchStatusUsingGetRequest {
    private 'project_id': string | undefined;
    private 'object_id': string | undefined;
    public constructor(projectId?: any, objectId?: any) { 
        this['project_id'] = projectId;
        this['object_id'] = objectId;
    }
    public withProjectId(projectId: string): ListIpsSwitchStatusUsingGetRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withObjectId(objectId: string): ListIpsSwitchStatusUsingGetRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
}