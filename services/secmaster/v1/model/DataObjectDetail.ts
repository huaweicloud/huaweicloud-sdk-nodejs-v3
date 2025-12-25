import { AlertDetailDataclassRef } from './AlertDetailDataclassRef';


export class DataObjectDetail {
    private 'create_time'?: string;
    public dataobject?: object;
    private 'dataclass_ref'?: AlertDetailDataclassRef;
    private 'format_version'?: number;
    public id?: string;
    private 'project_id'?: string;
    private 'update_time'?: string;
    public version?: number;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): DataObjectDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDataobject(dataobject: object): DataObjectDetail {
        this['dataobject'] = dataobject;
        return this;
    }
    public withDataclassRef(dataclassRef: AlertDetailDataclassRef): DataObjectDetail {
        this['dataclass_ref'] = dataclassRef;
        return this;
    }
    public set dataclassRef(dataclassRef: AlertDetailDataclassRef  | undefined) {
        this['dataclass_ref'] = dataclassRef;
    }
    public get dataclassRef(): AlertDetailDataclassRef | undefined {
        return this['dataclass_ref'];
    }
    public withFormatVersion(formatVersion: number): DataObjectDetail {
        this['format_version'] = formatVersion;
        return this;
    }
    public set formatVersion(formatVersion: number  | undefined) {
        this['format_version'] = formatVersion;
    }
    public get formatVersion(): number | undefined {
        return this['format_version'];
    }
    public withId(id: string): DataObjectDetail {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): DataObjectDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpdateTime(updateTime: string): DataObjectDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withVersion(version: number): DataObjectDetail {
        this['version'] = version;
        return this;
    }
    public withWorkspaceId(workspaceId: string): DataObjectDetail {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}