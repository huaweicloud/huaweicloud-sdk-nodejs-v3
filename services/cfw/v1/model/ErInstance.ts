

export class ErInstance {
    public id?: string;
    public name?: string;
    public state?: string;
    private 'enterprise_project_id'?: string;
    private 'project_id'?: string;
    private 'enable_ipv6'?: string;
    private 'attachment_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ErInstance {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ErInstance {
        this['name'] = name;
        return this;
    }
    public withState(state: string): ErInstance {
        this['state'] = state;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ErInstance {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): ErInstance {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnableIpv6(enableIpv6: string): ErInstance {
        this['enable_ipv6'] = enableIpv6;
        return this;
    }
    public set enableIpv6(enableIpv6: string  | undefined) {
        this['enable_ipv6'] = enableIpv6;
    }
    public get enableIpv6(): string | undefined {
        return this['enable_ipv6'];
    }
    public withAttachmentId(attachmentId: string): ErInstance {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
}