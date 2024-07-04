import { BuildInfo } from './BuildInfo';
import { ComponentCategory } from './ComponentCategory';
import { ComponentInstanceOverView } from './ComponentInstanceOverView';
import { ComponentSubCategory } from './ComponentSubCategory';
import { RuntimeType } from './RuntimeType';
import { SourceObject } from './SourceObject';


export class ComponentOverview {
    public id?: string;
    private 'application_id'?: string;
    public name?: string;
    private 'project_id'?: string;
    public runtime?: RuntimeType;
    public category?: ComponentCategory;
    private 'sub_category'?: ComponentSubCategory;
    public description?: string;
    public status?: number;
    public source?: SourceObject;
    public build?: BuildInfo;
    public creator?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public instances?: Array<ComponentInstanceOverView>;
    public constructor() { 
    }
    public withId(id: string): ComponentOverview {
        this['id'] = id;
        return this;
    }
    public withApplicationId(applicationId: string): ComponentOverview {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withName(name: string): ComponentOverview {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ComponentOverview {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRuntime(runtime: RuntimeType): ComponentOverview {
        this['runtime'] = runtime;
        return this;
    }
    public withCategory(category: ComponentCategory): ComponentOverview {
        this['category'] = category;
        return this;
    }
    public withSubCategory(subCategory: ComponentSubCategory): ComponentOverview {
        this['sub_category'] = subCategory;
        return this;
    }
    public set subCategory(subCategory: ComponentSubCategory  | undefined) {
        this['sub_category'] = subCategory;
    }
    public get subCategory(): ComponentSubCategory | undefined {
        return this['sub_category'];
    }
    public withDescription(description: string): ComponentOverview {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): ComponentOverview {
        this['status'] = status;
        return this;
    }
    public withSource(source: SourceObject): ComponentOverview {
        this['source'] = source;
        return this;
    }
    public withBuild(build: BuildInfo): ComponentOverview {
        this['build'] = build;
        return this;
    }
    public withCreator(creator: string): ComponentOverview {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: number): ComponentOverview {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ComponentOverview {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withInstances(instances: Array<ComponentInstanceOverView>): ComponentOverview {
        this['instances'] = instances;
        return this;
    }
}