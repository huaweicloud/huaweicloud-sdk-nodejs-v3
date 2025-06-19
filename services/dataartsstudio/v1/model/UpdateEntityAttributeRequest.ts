

export class UpdateEntityAttributeRequest {
    public workspace?: string;
    public guid?: string;
    private 'attr_name'?: string;
    private 'attr_value'?: string;
    public constructor(workspace?: string, guid?: string, attrName?: string, attrValue?: string) { 
        this['workspace'] = workspace;
        this['guid'] = guid;
        this['attr_name'] = attrName;
        this['attr_value'] = attrValue;
    }
    public withWorkspace(workspace: string): UpdateEntityAttributeRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withGuid(guid: string): UpdateEntityAttributeRequest {
        this['guid'] = guid;
        return this;
    }
    public withAttrName(attrName: string): UpdateEntityAttributeRequest {
        this['attr_name'] = attrName;
        return this;
    }
    public set attrName(attrName: string  | undefined) {
        this['attr_name'] = attrName;
    }
    public get attrName(): string | undefined {
        return this['attr_name'];
    }
    public withAttrValue(attrValue: string): UpdateEntityAttributeRequest {
        this['attr_value'] = attrValue;
        return this;
    }
    public set attrValue(attrValue: string  | undefined) {
        this['attr_value'] = attrValue;
    }
    public get attrValue(): string | undefined {
        return this['attr_value'];
    }
}