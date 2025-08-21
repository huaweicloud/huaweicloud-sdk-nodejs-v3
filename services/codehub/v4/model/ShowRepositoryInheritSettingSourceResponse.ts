
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryInheritSettingSourceResponse extends SdkResponse {
    private 'source_type'?: ShowRepositoryInheritSettingSourceResponseSourceTypeEnum | string;
    private 'source_id'?: string;
    private 'upward_inherit_editable'?: boolean;
    public constructor() { 
        super();
    }
    public withSourceType(sourceType: ShowRepositoryInheritSettingSourceResponseSourceTypeEnum | string): ShowRepositoryInheritSettingSourceResponse {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: ShowRepositoryInheritSettingSourceResponseSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): ShowRepositoryInheritSettingSourceResponseSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withSourceId(sourceId: string): ShowRepositoryInheritSettingSourceResponse {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withUpwardInheritEditable(upwardInheritEditable: boolean): ShowRepositoryInheritSettingSourceResponse {
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

/**
    * @export
    * @enum {string}
    */
export enum ShowRepositoryInheritSettingSourceResponseSourceTypeEnum {
    PROJECT = 'project',
    GROUP = 'group',
    REPOSITORY = 'repository'
}
