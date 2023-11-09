import { DataClassRefPojo } from './DataClassRefPojo';
import { IndicatorDataObjectDetail } from './IndicatorDataObjectDetail';


export class IndicatorDetail {
    public id?: string;
    public name?: string;
    private 'data_object'?: IndicatorDataObjectDetail;
    private 'workspace_id'?: string;
    private 'project_id'?: string;
    private 'dataclass_ref'?: DataClassRefPojo;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withId(id: string): IndicatorDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): IndicatorDetail {
        this['name'] = name;
        return this;
    }
    public withDataObject(dataObject: IndicatorDataObjectDetail): IndicatorDetail {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: IndicatorDataObjectDetail  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): IndicatorDataObjectDetail | undefined {
        return this['data_object'];
    }
    public withWorkspaceId(workspaceId: string): IndicatorDetail {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withProjectId(projectId: string): IndicatorDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDataclassRef(dataclassRef: DataClassRefPojo): IndicatorDetail {
        this['dataclass_ref'] = dataclassRef;
        return this;
    }
    public set dataclassRef(dataclassRef: DataClassRefPojo  | undefined) {
        this['dataclass_ref'] = dataclassRef;
    }
    public get dataclassRef(): DataClassRefPojo | undefined {
        return this['dataclass_ref'];
    }
    public withCreateTime(createTime: string): IndicatorDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): IndicatorDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}