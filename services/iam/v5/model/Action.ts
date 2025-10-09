import { ActionAssociatedResource } from './ActionAssociatedResource';
import { Description } from './Description';


export class Action {
    public name?: string;
    private 'access_level'?: ActionAccessLevelEnum | string;
    private 'permission_only'?: boolean;
    public description?: Description;
    public aliases?: Array<string>;
    public resources?: Array<ActionAssociatedResource>;
    private 'condition_keys'?: Array<string>;
    public constructor(name?: string, accessLevel?: string, permissionOnly?: boolean, description?: Description) { 
        this['name'] = name;
        this['access_level'] = accessLevel;
        this['permission_only'] = permissionOnly;
        this['description'] = description;
    }
    public withName(name: string): Action {
        this['name'] = name;
        return this;
    }
    public withAccessLevel(accessLevel: ActionAccessLevelEnum | string): Action {
        this['access_level'] = accessLevel;
        return this;
    }
    public set accessLevel(accessLevel: ActionAccessLevelEnum | string  | undefined) {
        this['access_level'] = accessLevel;
    }
    public get accessLevel(): ActionAccessLevelEnum | string | undefined {
        return this['access_level'];
    }
    public withPermissionOnly(permissionOnly: boolean): Action {
        this['permission_only'] = permissionOnly;
        return this;
    }
    public set permissionOnly(permissionOnly: boolean  | undefined) {
        this['permission_only'] = permissionOnly;
    }
    public get permissionOnly(): boolean | undefined {
        return this['permission_only'];
    }
    public withDescription(description: Description): Action {
        this['description'] = description;
        return this;
    }
    public withAliases(aliases: Array<string>): Action {
        this['aliases'] = aliases;
        return this;
    }
    public withResources(resources: Array<ActionAssociatedResource>): Action {
        this['resources'] = resources;
        return this;
    }
    public withConditionKeys(conditionKeys: Array<string>): Action {
        this['condition_keys'] = conditionKeys;
        return this;
    }
    public set conditionKeys(conditionKeys: Array<string>  | undefined) {
        this['condition_keys'] = conditionKeys;
    }
    public get conditionKeys(): Array<string> | undefined {
        return this['condition_keys'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ActionAccessLevelEnum {
    LIST = 'list',
    READ = 'read',
    WRITE = 'write',
    PERMISSION_MANAGEMENT = 'permission_management',
    TAGGING = 'tagging'
}
