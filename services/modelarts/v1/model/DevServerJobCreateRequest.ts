import { DevServerJobItem } from './DevServerJobItem';


export class DevServerJobCreateRequest {
    public name?: string;
    public description?: string;
    private 'server_ids'?: Array<string>;
    public type?: string;
    private 'is_reboot'?: boolean;
    public items?: Array<DevServerJobItem>;
    public constructor(name?: string, serverIds?: Array<string>, type?: string, items?: Array<DevServerJobItem>) { 
        this['name'] = name;
        this['server_ids'] = serverIds;
        this['type'] = type;
        this['items'] = items;
    }
    public withName(name: string): DevServerJobCreateRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): DevServerJobCreateRequest {
        this['description'] = description;
        return this;
    }
    public withServerIds(serverIds: Array<string>): DevServerJobCreateRequest {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
    public withType(type: string): DevServerJobCreateRequest {
        this['type'] = type;
        return this;
    }
    public withIsReboot(isReboot: boolean): DevServerJobCreateRequest {
        this['is_reboot'] = isReboot;
        return this;
    }
    public set isReboot(isReboot: boolean  | undefined) {
        this['is_reboot'] = isReboot;
    }
    public get isReboot(): boolean | undefined {
        return this['is_reboot'];
    }
    public withItems(items: Array<DevServerJobItem>): DevServerJobCreateRequest {
        this['items'] = items;
        return this;
    }
}