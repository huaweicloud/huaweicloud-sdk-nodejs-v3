import { Alert } from './Alert';
import { AlertDetailDataclassRef } from './AlertDetailDataclassRef';


export class AlertDetail {
    private 'create_time'?: string;
    private 'data_object'?: Alert;
    private 'dataclass_ref'?: AlertDetailDataclassRef;
    private 'format_version'?: number;
    public id?: string;
    private 'project_id'?: string;
    private 'update_time'?: string;
    public version?: number;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: string): AlertDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDataObject(dataObject: Alert): AlertDetail {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: Alert  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): Alert | undefined {
        return this['data_object'];
    }
    public withDataclassRef(dataclassRef: AlertDetailDataclassRef): AlertDetail {
        this['dataclass_ref'] = dataclassRef;
        return this;
    }
    public set dataclassRef(dataclassRef: AlertDetailDataclassRef  | undefined) {
        this['dataclass_ref'] = dataclassRef;
    }
    public get dataclassRef(): AlertDetailDataclassRef | undefined {
        return this['dataclass_ref'];
    }
    public withFormatVersion(formatVersion: number): AlertDetail {
        this['format_version'] = formatVersion;
        return this;
    }
    public set formatVersion(formatVersion: number  | undefined) {
        this['format_version'] = formatVersion;
    }
    public get formatVersion(): number | undefined {
        return this['format_version'];
    }
    public withId(id: string): AlertDetail {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): AlertDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpdateTime(updateTime: string): AlertDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withVersion(version: number): AlertDetail {
        this['version'] = version;
        return this;
    }
    public withWorkspaceId(workspaceId: string): AlertDetail {
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