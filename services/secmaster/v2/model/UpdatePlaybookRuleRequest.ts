import { ModifyRuleInfo } from './ModifyRuleInfo';


export class UpdatePlaybookRuleRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'version_id'?: string;
    private 'rule_id'?: string;
    public body?: ModifyRuleInfo;
    public constructor(contentType?: string, workspaceId?: string, versionId?: string, ruleId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['version_id'] = versionId;
        this['rule_id'] = ruleId;
    }
    public withContentType(contentType: string): UpdatePlaybookRuleRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): UpdatePlaybookRuleRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withVersionId(versionId: string): UpdatePlaybookRuleRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withRuleId(ruleId: string): UpdatePlaybookRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withBody(body: ModifyRuleInfo): UpdatePlaybookRuleRequest {
        this['body'] = body;
        return this;
    }
}