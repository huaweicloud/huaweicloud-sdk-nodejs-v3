import { UpdatePermissionBodyDto } from './UpdatePermissionBodyDto';


export class UpdateGroupResourcePermissionsRequest {
    private 'group_id'?: number;
    private 'resource_id'?: number;
    public body?: UpdatePermissionBodyDto;
    public constructor(groupId?: number, resourceId?: number) { 
        this['group_id'] = groupId;
        this['resource_id'] = resourceId;
    }
    public withGroupId(groupId: number): UpdateGroupResourcePermissionsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withResourceId(resourceId: number): UpdateGroupResourcePermissionsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: number  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): number | undefined {
        return this['resource_id'];
    }
    public withBody(body: UpdatePermissionBodyDto): UpdateGroupResourcePermissionsRequest {
        this['body'] = body;
        return this;
    }
}