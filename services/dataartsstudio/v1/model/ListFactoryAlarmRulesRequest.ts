

export class ListFactoryAlarmRulesRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public name?: string;
    private 'remind_type'?: number;
    private 'ding_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListFactoryAlarmRulesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ListFactoryAlarmRulesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ListFactoryAlarmRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): ListFactoryAlarmRulesRequest {
        this['name'] = name;
        return this;
    }
    public withRemindType(remindType: number): ListFactoryAlarmRulesRequest {
        this['remind_type'] = remindType;
        return this;
    }
    public set remindType(remindType: number  | undefined) {
        this['remind_type'] = remindType;
    }
    public get remindType(): number | undefined {
        return this['remind_type'];
    }
    public withDingName(dingName: string): ListFactoryAlarmRulesRequest {
        this['ding_name'] = dingName;
        return this;
    }
    public set dingName(dingName: string  | undefined) {
        this['ding_name'] = dingName;
    }
    public get dingName(): string | undefined {
        return this['ding_name'];
    }
    public withOffset(offset: number): ListFactoryAlarmRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFactoryAlarmRulesRequest {
        this['limit'] = limit;
        return this;
    }
}