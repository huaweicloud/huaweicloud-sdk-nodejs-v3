

export class ShowScriptFileRequest {
    private 'enterprise_project_id'?: string;
    public type?: ShowScriptFileRequestTypeEnum | string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowScriptFileRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withType(type: ShowScriptFileRequestTypeEnum | string): ShowScriptFileRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowScriptFileRequestTypeEnum {
    AGENT_BATCH_INSTALL_WINDOWS = 'agent_batch_install_windows',
    AGENT_SINGLE_INSTALL_WINDOWS = 'agent_single_install_windows',
    AGENT_THIRD_PARTY_CLOUD_BATCH_INSTALL_WINDOWS = 'agent_third_party_cloud_batch_install_windows',
    AGENT_THIRD_PARTY_CLOUD_SINGLE_INSTALL_WINDOWS = 'agent_third_party_cloud_single_install_windows',
    AGENT_OTHER_ACCOUNTS_BATCH_INSTALL_WINDOWS = 'agent_other_accounts_batch_install_windows',
    AGENT_OTHER_ACCOUNTS_SINGLE_INSTALL_WINDOWS = 'agent_other_accounts_single_install_windows'
}
