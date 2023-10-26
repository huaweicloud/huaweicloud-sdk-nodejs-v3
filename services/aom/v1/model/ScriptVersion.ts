import { ReferenceInfo } from './ReferenceInfo';


export class ScriptVersion {
    public content?: string;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'enterprise_project_id'?: string;
    public name?: string;
    private 'project_id'?: string;
    private 'job_reference_number'?: number;
    private 'script_id'?: string;
    private 'script_language'?: string;
    private 'status_desc'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    private 'version_id'?: string;
    private 'version_number'?: string;
    private 'job_reference_name'?: Array<ReferenceInfo>;
    public constructor(content?: string) { 
        this['content'] = content;
    }
    public withContent(content: string): ScriptVersion {
        this['content'] = content;
        return this;
    }
    public withCreateBy(createBy: string): ScriptVersion {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): ScriptVersion {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ScriptVersion {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): ScriptVersion {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ScriptVersion {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withJobReferenceNumber(jobReferenceNumber: number): ScriptVersion {
        this['job_reference_number'] = jobReferenceNumber;
        return this;
    }
    public set jobReferenceNumber(jobReferenceNumber: number  | undefined) {
        this['job_reference_number'] = jobReferenceNumber;
    }
    public get jobReferenceNumber(): number | undefined {
        return this['job_reference_number'];
    }
    public withScriptId(scriptId: string): ScriptVersion {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withScriptLanguage(scriptLanguage: string): ScriptVersion {
        this['script_language'] = scriptLanguage;
        return this;
    }
    public set scriptLanguage(scriptLanguage: string  | undefined) {
        this['script_language'] = scriptLanguage;
    }
    public get scriptLanguage(): string | undefined {
        return this['script_language'];
    }
    public withStatusDesc(statusDesc: number): ScriptVersion {
        this['status_desc'] = statusDesc;
        return this;
    }
    public set statusDesc(statusDesc: number  | undefined) {
        this['status_desc'] = statusDesc;
    }
    public get statusDesc(): number | undefined {
        return this['status_desc'];
    }
    public withUpdateBy(updateBy: string): ScriptVersion {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): ScriptVersion {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withVersionId(versionId: string): ScriptVersion {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withVersionNumber(versionNumber: string): ScriptVersion {
        this['version_number'] = versionNumber;
        return this;
    }
    public set versionNumber(versionNumber: string  | undefined) {
        this['version_number'] = versionNumber;
    }
    public get versionNumber(): string | undefined {
        return this['version_number'];
    }
    public withJobReferenceName(jobReferenceName: Array<ReferenceInfo>): ScriptVersion {
        this['job_reference_name'] = jobReferenceName;
        return this;
    }
    public set jobReferenceName(jobReferenceName: Array<ReferenceInfo>  | undefined) {
        this['job_reference_name'] = jobReferenceName;
    }
    public get jobReferenceName(): Array<ReferenceInfo> | undefined {
        return this['job_reference_name'];
    }
}