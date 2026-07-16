
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFeaturesResponse extends SdkResponse {
    private 'create_at'?: number;
    public enabled?: boolean;
    public id?: string;
    public name?: string;
    public quota?: number;
    public used?: number;
    private 'update_at'?: number;
    private 'user_id'?: string;
    public constructor() { 
        super();
    }
    public withCreateAt(createAt: number): ListFeaturesResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withEnabled(enabled: boolean): ListFeaturesResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): ListFeaturesResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListFeaturesResponse {
        this['name'] = name;
        return this;
    }
    public withQuota(quota: number): ListFeaturesResponse {
        this['quota'] = quota;
        return this;
    }
    public withUsed(used: number): ListFeaturesResponse {
        this['used'] = used;
        return this;
    }
    public withUpdateAt(updateAt: number): ListFeaturesResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withUserId(userId: string): ListFeaturesResponse {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
}