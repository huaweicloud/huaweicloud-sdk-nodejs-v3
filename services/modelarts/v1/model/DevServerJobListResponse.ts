

export class DevServerJobListResponse {
    public id?: string;
    public name?: string;
    private 'user_name'?: string;
    public description?: string;
    public type?: string;
    public status?: string;
    private 'abnormal_count'?: number;
    private 'create_at'?: string;
    private 'update_at'?: string;
    public constructor() { 
    }
    public withId(id: string): DevServerJobListResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DevServerJobListResponse {
        this['name'] = name;
        return this;
    }
    public withUserName(userName: string): DevServerJobListResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDescription(description: string): DevServerJobListResponse {
        this['description'] = description;
        return this;
    }
    public withType(type: string): DevServerJobListResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): DevServerJobListResponse {
        this['status'] = status;
        return this;
    }
    public withAbnormalCount(abnormalCount: number): DevServerJobListResponse {
        this['abnormal_count'] = abnormalCount;
        return this;
    }
    public set abnormalCount(abnormalCount: number  | undefined) {
        this['abnormal_count'] = abnormalCount;
    }
    public get abnormalCount(): number | undefined {
        return this['abnormal_count'];
    }
    public withCreateAt(createAt: string): DevServerJobListResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): DevServerJobListResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
}