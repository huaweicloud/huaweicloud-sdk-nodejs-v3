

export class ImageGroup {
    public name?: string;
    private 'create_at'?: number;
    public namespace?: string;
    private 'update_at'?: number;
    private 'version_count'?: number;
    public description?: string;
    private 'read_me'?: string;
    private 'icon_name'?: string;
    public id?: string;
    private 'swr_instance_name'?: string;
    private 'swr_instance_id'?: string;
    public constructor() { 
    }
    public withName(name: string): ImageGroup {
        this['name'] = name;
        return this;
    }
    public withCreateAt(createAt: number): ImageGroup {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withNamespace(namespace: string): ImageGroup {
        this['namespace'] = namespace;
        return this;
    }
    public withUpdateAt(updateAt: number): ImageGroup {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withVersionCount(versionCount: number): ImageGroup {
        this['version_count'] = versionCount;
        return this;
    }
    public set versionCount(versionCount: number  | undefined) {
        this['version_count'] = versionCount;
    }
    public get versionCount(): number | undefined {
        return this['version_count'];
    }
    public withDescription(description: string): ImageGroup {
        this['description'] = description;
        return this;
    }
    public withReadMe(readMe: string): ImageGroup {
        this['read_me'] = readMe;
        return this;
    }
    public set readMe(readMe: string  | undefined) {
        this['read_me'] = readMe;
    }
    public get readMe(): string | undefined {
        return this['read_me'];
    }
    public withIconName(iconName: string): ImageGroup {
        this['icon_name'] = iconName;
        return this;
    }
    public set iconName(iconName: string  | undefined) {
        this['icon_name'] = iconName;
    }
    public get iconName(): string | undefined {
        return this['icon_name'];
    }
    public withId(id: string): ImageGroup {
        this['id'] = id;
        return this;
    }
    public withSwrInstanceName(swrInstanceName: string): ImageGroup {
        this['swr_instance_name'] = swrInstanceName;
        return this;
    }
    public set swrInstanceName(swrInstanceName: string  | undefined) {
        this['swr_instance_name'] = swrInstanceName;
    }
    public get swrInstanceName(): string | undefined {
        return this['swr_instance_name'];
    }
    public withSwrInstanceId(swrInstanceId: string): ImageGroup {
        this['swr_instance_id'] = swrInstanceId;
        return this;
    }
    public set swrInstanceId(swrInstanceId: string  | undefined) {
        this['swr_instance_id'] = swrInstanceId;
    }
    public get swrInstanceId(): string | undefined {
        return this['swr_instance_id'];
    }
}