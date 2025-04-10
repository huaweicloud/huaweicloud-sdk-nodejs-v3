

export class SetTwoFactorLoginConfigRequestBody {
    public enabled?: boolean;
    private 'auth_type'?: string;
    private 'topic_display_name'?: string;
    private 'topic_urn'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(enabled?: boolean, authType?: string, topicDisplayName?: string, topicUrn?: string, hostIdList?: Array<string>) { 
        this['enabled'] = enabled;
        this['auth_type'] = authType;
        this['topic_display_name'] = topicDisplayName;
        this['topic_urn'] = topicUrn;
        this['host_id_list'] = hostIdList;
    }
    public withEnabled(enabled: boolean): SetTwoFactorLoginConfigRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withAuthType(authType: string): SetTwoFactorLoginConfigRequestBody {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withTopicDisplayName(topicDisplayName: string): SetTwoFactorLoginConfigRequestBody {
        this['topic_display_name'] = topicDisplayName;
        return this;
    }
    public set topicDisplayName(topicDisplayName: string  | undefined) {
        this['topic_display_name'] = topicDisplayName;
    }
    public get topicDisplayName(): string | undefined {
        return this['topic_display_name'];
    }
    public withTopicUrn(topicUrn: string): SetTwoFactorLoginConfigRequestBody {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withHostIdList(hostIdList: Array<string>): SetTwoFactorLoginConfigRequestBody {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}