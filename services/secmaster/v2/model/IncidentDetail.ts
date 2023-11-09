import { AlertDetailDataclassRef } from './AlertDetailDataclassRef';
import { Incident } from './Incident';


export class IncidentDetail {
    private 'create_time'?: string;
    private 'data_object'?: Incident;
    private 'dataclass_ref'?: AlertDetailDataclassRef;
    private 'format_version'?: number;
    public id?: string;
    private 'project_id'?: string;
    private 'update_time'?: string;
    public version?: number;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): IncidentDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDataObject(dataObject: Incident): IncidentDetail {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: Incident  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): Incident | undefined {
        return this['data_object'];
    }
    public withDataclassRef(dataclassRef: AlertDetailDataclassRef): IncidentDetail {
        this['dataclass_ref'] = dataclassRef;
        return this;
    }
    public set dataclassRef(dataclassRef: AlertDetailDataclassRef  | undefined) {
        this['dataclass_ref'] = dataclassRef;
    }
    public get dataclassRef(): AlertDetailDataclassRef | undefined {
        return this['dataclass_ref'];
    }
    public withFormatVersion(formatVersion: number): IncidentDetail {
        this['format_version'] = formatVersion;
        return this;
    }
    public set formatVersion(formatVersion: number  | undefined) {
        this['format_version'] = formatVersion;
    }
    public get formatVersion(): number | undefined {
        return this['format_version'];
    }
    public withId(id: string): IncidentDetail {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): IncidentDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpdateTime(updateTime: string): IncidentDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withVersion(version: number): IncidentDetail {
        this['version'] = version;
        return this;
    }
    public withWorkspaceId(workspaceId: string): IncidentDetail {
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