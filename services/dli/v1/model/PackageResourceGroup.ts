import { PackageResource } from './PackageResource';


export class PackageResourceGroup {
    private 'group_name'?: string;
    public status?: string;
    public resources?: Array<string>;
    public details?: Array<PackageResource>;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public owner?: string;
    private 'is_async'?: boolean;
    public constructor() { 
    }
    public withGroupName(groupName: string): PackageResourceGroup {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withStatus(status: string): PackageResourceGroup {
        this['status'] = status;
        return this;
    }
    public withResources(resources: Array<string>): PackageResourceGroup {
        this['resources'] = resources;
        return this;
    }
    public withDetails(details: Array<PackageResource>): PackageResourceGroup {
        this['details'] = details;
        return this;
    }
    public withCreateTime(createTime: number): PackageResourceGroup {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): PackageResourceGroup {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withOwner(owner: string): PackageResourceGroup {
        this['owner'] = owner;
        return this;
    }
    public withIsAsync(isAsync: boolean): PackageResourceGroup {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
}