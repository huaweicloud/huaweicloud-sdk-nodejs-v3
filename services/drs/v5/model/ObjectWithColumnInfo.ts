

export class ObjectWithColumnInfo {
    public id?: string;
    private 'parent_id'?: string;
    public type?: string;
    public name?: string;
    private 'alias_name'?: string;
    public notices?: Array<string>;
    private 'extend_info'?: string;
    private 'is_support_expand'?: boolean;
    private 'has_column_info'?: boolean;
    private 'is_preset'?: boolean;
    private 'token_count'?: string;
    private 'is_sent'?: boolean;
    private 'sent_alias_name'?: string;
    public constructor() { 
    }
    public withId(id: string): ObjectWithColumnInfo {
        this['id'] = id;
        return this;
    }
    public withParentId(parentId: string): ObjectWithColumnInfo {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withType(type: string): ObjectWithColumnInfo {
        this['type'] = type;
        return this;
    }
    public withName(name: string): ObjectWithColumnInfo {
        this['name'] = name;
        return this;
    }
    public withAliasName(aliasName: string): ObjectWithColumnInfo {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withNotices(notices: Array<string>): ObjectWithColumnInfo {
        this['notices'] = notices;
        return this;
    }
    public withExtendInfo(extendInfo: string): ObjectWithColumnInfo {
        this['extend_info'] = extendInfo;
        return this;
    }
    public set extendInfo(extendInfo: string  | undefined) {
        this['extend_info'] = extendInfo;
    }
    public get extendInfo(): string | undefined {
        return this['extend_info'];
    }
    public withIsSupportExpand(isSupportExpand: boolean): ObjectWithColumnInfo {
        this['is_support_expand'] = isSupportExpand;
        return this;
    }
    public set isSupportExpand(isSupportExpand: boolean  | undefined) {
        this['is_support_expand'] = isSupportExpand;
    }
    public get isSupportExpand(): boolean | undefined {
        return this['is_support_expand'];
    }
    public withHasColumnInfo(hasColumnInfo: boolean): ObjectWithColumnInfo {
        this['has_column_info'] = hasColumnInfo;
        return this;
    }
    public set hasColumnInfo(hasColumnInfo: boolean  | undefined) {
        this['has_column_info'] = hasColumnInfo;
    }
    public get hasColumnInfo(): boolean | undefined {
        return this['has_column_info'];
    }
    public withIsPreset(isPreset: boolean): ObjectWithColumnInfo {
        this['is_preset'] = isPreset;
        return this;
    }
    public set isPreset(isPreset: boolean  | undefined) {
        this['is_preset'] = isPreset;
    }
    public get isPreset(): boolean | undefined {
        return this['is_preset'];
    }
    public withTokenCount(tokenCount: string): ObjectWithColumnInfo {
        this['token_count'] = tokenCount;
        return this;
    }
    public set tokenCount(tokenCount: string  | undefined) {
        this['token_count'] = tokenCount;
    }
    public get tokenCount(): string | undefined {
        return this['token_count'];
    }
    public withIsSent(isSent: boolean): ObjectWithColumnInfo {
        this['is_sent'] = isSent;
        return this;
    }
    public set isSent(isSent: boolean  | undefined) {
        this['is_sent'] = isSent;
    }
    public get isSent(): boolean | undefined {
        return this['is_sent'];
    }
    public withSentAliasName(sentAliasName: string): ObjectWithColumnInfo {
        this['sent_alias_name'] = sentAliasName;
        return this;
    }
    public set sentAliasName(sentAliasName: string  | undefined) {
        this['sent_alias_name'] = sentAliasName;
    }
    public get sentAliasName(): string | undefined {
        return this['sent_alias_name'];
    }
}