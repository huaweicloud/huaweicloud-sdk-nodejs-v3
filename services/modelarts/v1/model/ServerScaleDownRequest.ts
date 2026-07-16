

export class ServerScaleDownRequest {
    public id?: string;
    public flavor?: string;
    private 'server_ids'?: Array<string>;
    private 'resource_flavor'?: string;
    public constructor() { 
    }
    public withId(id: string): ServerScaleDownRequest {
        this['id'] = id;
        return this;
    }
    public withFlavor(flavor: string): ServerScaleDownRequest {
        this['flavor'] = flavor;
        return this;
    }
    public withServerIds(serverIds: Array<string>): ServerScaleDownRequest {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
    public withResourceFlavor(resourceFlavor: string): ServerScaleDownRequest {
        this['resource_flavor'] = resourceFlavor;
        return this;
    }
    public set resourceFlavor(resourceFlavor: string  | undefined) {
        this['resource_flavor'] = resourceFlavor;
    }
    public get resourceFlavor(): string | undefined {
        return this['resource_flavor'];
    }
}