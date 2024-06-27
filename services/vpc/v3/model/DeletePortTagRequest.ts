

export class DeletePortTagRequest {
    private 'port_id'?: string;
    private 'tag_key'?: string;
    public constructor(portId?: string, tagKey?: string) { 
        this['port_id'] = portId;
        this['tag_key'] = tagKey;
    }
    public withPortId(portId: string): DeletePortTagRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withTagKey(tagKey: string): DeletePortTagRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
}