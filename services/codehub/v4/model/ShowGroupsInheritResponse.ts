
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGroupsInheritResponse extends SdkResponse {
    private 'group_id'?: string;
    private 'source_setting'?: string;
    private 'project_id'?: string;
    private 'upward_inherit_editable'?: boolean;
    public constructor() { 
        super();
    }
    public withGroupId(groupId: string): ShowGroupsInheritResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withSourceSetting(sourceSetting: string): ShowGroupsInheritResponse {
        this['source_setting'] = sourceSetting;
        return this;
    }
    public set sourceSetting(sourceSetting: string  | undefined) {
        this['source_setting'] = sourceSetting;
    }
    public get sourceSetting(): string | undefined {
        return this['source_setting'];
    }
    public withProjectId(projectId: string): ShowGroupsInheritResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withUpwardInheritEditable(upwardInheritEditable: boolean): ShowGroupsInheritResponse {
        this['upward_inherit_editable'] = upwardInheritEditable;
        return this;
    }
    public set upwardInheritEditable(upwardInheritEditable: boolean  | undefined) {
        this['upward_inherit_editable'] = upwardInheritEditable;
    }
    public get upwardInheritEditable(): boolean | undefined {
        return this['upward_inherit_editable'];
    }
}