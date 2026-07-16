

export class ListImageGroupRequest {
    public name?: string;
    private 'name_fuzzy_match'?: boolean;
    public namespace?: string;
    public type?: ListImageGroupRequestTypeEnum | string;
    private 'workspace_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'swr_instance_id'?: string;
    public constructor() { 
    }
    public withName(name: string): ListImageGroupRequest {
        this['name'] = name;
        return this;
    }
    public withNameFuzzyMatch(nameFuzzyMatch: boolean): ListImageGroupRequest {
        this['name_fuzzy_match'] = nameFuzzyMatch;
        return this;
    }
    public set nameFuzzyMatch(nameFuzzyMatch: boolean  | undefined) {
        this['name_fuzzy_match'] = nameFuzzyMatch;
    }
    public get nameFuzzyMatch(): boolean | undefined {
        return this['name_fuzzy_match'];
    }
    public withNamespace(namespace: string): ListImageGroupRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withType(type: ListImageGroupRequestTypeEnum | string): ListImageGroupRequest {
        this['type'] = type;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListImageGroupRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLimit(limit: number): ListImageGroupRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListImageGroupRequest {
        this['offset'] = offset;
        return this;
    }
    public withSwrInstanceId(swrInstanceId: string): ListImageGroupRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListImageGroupRequestTypeEnum {
    BUILD_IN = 'BUILD_IN',
    DEDICATED = 'DEDICATED'
}
