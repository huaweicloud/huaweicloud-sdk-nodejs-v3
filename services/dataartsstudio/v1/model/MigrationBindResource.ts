import { MigrationBindWorkspace } from './MigrationBindWorkspace';


export class MigrationBindResource {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    public workspaces?: Array<MigrationBindWorkspace>;
    public constructor(resourceId?: string, resourceName?: string, workspaces?: Array<MigrationBindWorkspace>) { 
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['workspaces'] = workspaces;
    }
    public withResourceId(resourceId: string): MigrationBindResource {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): MigrationBindResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withWorkspaces(workspaces: Array<MigrationBindWorkspace>): MigrationBindResource {
        this['workspaces'] = workspaces;
        return this;
    }
}