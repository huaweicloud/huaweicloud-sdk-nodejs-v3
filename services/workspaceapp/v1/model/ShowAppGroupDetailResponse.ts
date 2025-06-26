import { AppGroup } from './AppGroup';
import { AppTypeEnum } from './AppTypeEnum';
import { AuthorizationTypeEnum } from './AuthorizationTypeEnum';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppGroupDetailResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'app_server_group_id'?: string;
    private 'app_server_group_name'?: string;
    public description?: string;
    private 'authorization_type'?: AuthorizationTypeEnum;
    private 'tenant_id'?: string;
    private 'app_type'?: AppTypeEnum;
    private 'create_at'?: Date;
    private 'app_count'?: number;
    private 'app_server_group_description'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAppGroupDetailResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowAppGroupDetailResponse {
        this['name'] = name;
        return this;
    }
    public withAppServerGroupId(appServerGroupId: string): ShowAppGroupDetailResponse {
        this['app_server_group_id'] = appServerGroupId;
        return this;
    }
    public set appServerGroupId(appServerGroupId: string  | undefined) {
        this['app_server_group_id'] = appServerGroupId;
    }
    public get appServerGroupId(): string | undefined {
        return this['app_server_group_id'];
    }
    public withAppServerGroupName(appServerGroupName: string): ShowAppGroupDetailResponse {
        this['app_server_group_name'] = appServerGroupName;
        return this;
    }
    public set appServerGroupName(appServerGroupName: string  | undefined) {
        this['app_server_group_name'] = appServerGroupName;
    }
    public get appServerGroupName(): string | undefined {
        return this['app_server_group_name'];
    }
    public withDescription(description: string): ShowAppGroupDetailResponse {
        this['description'] = description;
        return this;
    }
    public withAuthorizationType(authorizationType: AuthorizationTypeEnum): ShowAppGroupDetailResponse {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: AuthorizationTypeEnum  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): AuthorizationTypeEnum | undefined {
        return this['authorization_type'];
    }
    public withTenantId(tenantId: string): ShowAppGroupDetailResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withAppType(appType: AppTypeEnum): ShowAppGroupDetailResponse {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: AppTypeEnum  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): AppTypeEnum | undefined {
        return this['app_type'];
    }
    public withCreateAt(createAt: Date): ShowAppGroupDetailResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: Date  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): Date | undefined {
        return this['create_at'];
    }
    public withAppCount(appCount: number): ShowAppGroupDetailResponse {
        this['app_count'] = appCount;
        return this;
    }
    public set appCount(appCount: number  | undefined) {
        this['app_count'] = appCount;
    }
    public get appCount(): number | undefined {
        return this['app_count'];
    }
    public withAppServerGroupDescription(appServerGroupDescription: string): ShowAppGroupDetailResponse {
        this['app_server_group_description'] = appServerGroupDescription;
        return this;
    }
    public set appServerGroupDescription(appServerGroupDescription: string  | undefined) {
        this['app_server_group_description'] = appServerGroupDescription;
    }
    public get appServerGroupDescription(): string | undefined {
        return this['app_server_group_description'];
    }
}