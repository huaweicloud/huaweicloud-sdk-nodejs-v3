

export class PolicyGroupResponseInfo {
    private 'group_name'?: string;
    private 'group_id'?: string;
    public description?: string;
    private 'host_num'?: number;
    private 'default_group'?: boolean;
    public deletable?: boolean;
    private 'support_os'?: string;
    private 'support_version'?: string;
    private 'protect_mode'?: string;
    public constructor() { 
    }
    public withGroupName(groupName: string): PolicyGroupResponseInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withGroupId(groupId: string): PolicyGroupResponseInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDescription(description: string): PolicyGroupResponseInfo {
        this['description'] = description;
        return this;
    }
    public withHostNum(hostNum: number): PolicyGroupResponseInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withDefaultGroup(defaultGroup: boolean): PolicyGroupResponseInfo {
        this['default_group'] = defaultGroup;
        return this;
    }
    public set defaultGroup(defaultGroup: boolean  | undefined) {
        this['default_group'] = defaultGroup;
    }
    public get defaultGroup(): boolean | undefined {
        return this['default_group'];
    }
    public withDeletable(deletable: boolean): PolicyGroupResponseInfo {
        this['deletable'] = deletable;
        return this;
    }
    public withSupportOs(supportOs: string): PolicyGroupResponseInfo {
        this['support_os'] = supportOs;
        return this;
    }
    public set supportOs(supportOs: string  | undefined) {
        this['support_os'] = supportOs;
    }
    public get supportOs(): string | undefined {
        return this['support_os'];
    }
    public withSupportVersion(supportVersion: string): PolicyGroupResponseInfo {
        this['support_version'] = supportVersion;
        return this;
    }
    public set supportVersion(supportVersion: string  | undefined) {
        this['support_version'] = supportVersion;
    }
    public get supportVersion(): string | undefined {
        return this['support_version'];
    }
    public withProtectMode(protectMode: string): PolicyGroupResponseInfo {
        this['protect_mode'] = protectMode;
        return this;
    }
    public set protectMode(protectMode: string  | undefined) {
        this['protect_mode'] = protectMode;
    }
    public get protectMode(): string | undefined {
        return this['protect_mode'];
    }
}