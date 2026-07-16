import { TemplateParam } from './TemplateParam';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetDevServerJobTemplateResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public description?: string;
    public cmd?: string;
    private 'swr_path'?: string;
    public resources?: string;
    public volumes?: string;
    private 'volumes_mount'?: string;
    private 'flavor_type'?: string;
    public timeout?: string;
    private 'check_interval'?: string;
    public type?: string;
    public status?: string;
    public params?: Array<TemplateParam>;
    public constructor() { 
        super();
    }
    public withId(id: string): GetDevServerJobTemplateResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetDevServerJobTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): GetDevServerJobTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withCmd(cmd: string): GetDevServerJobTemplateResponse {
        this['cmd'] = cmd;
        return this;
    }
    public withSwrPath(swrPath: string): GetDevServerJobTemplateResponse {
        this['swr_path'] = swrPath;
        return this;
    }
    public set swrPath(swrPath: string  | undefined) {
        this['swr_path'] = swrPath;
    }
    public get swrPath(): string | undefined {
        return this['swr_path'];
    }
    public withResources(resources: string): GetDevServerJobTemplateResponse {
        this['resources'] = resources;
        return this;
    }
    public withVolumes(volumes: string): GetDevServerJobTemplateResponse {
        this['volumes'] = volumes;
        return this;
    }
    public withVolumesMount(volumesMount: string): GetDevServerJobTemplateResponse {
        this['volumes_mount'] = volumesMount;
        return this;
    }
    public set volumesMount(volumesMount: string  | undefined) {
        this['volumes_mount'] = volumesMount;
    }
    public get volumesMount(): string | undefined {
        return this['volumes_mount'];
    }
    public withFlavorType(flavorType: string): GetDevServerJobTemplateResponse {
        this['flavor_type'] = flavorType;
        return this;
    }
    public set flavorType(flavorType: string  | undefined) {
        this['flavor_type'] = flavorType;
    }
    public get flavorType(): string | undefined {
        return this['flavor_type'];
    }
    public withTimeout(timeout: string): GetDevServerJobTemplateResponse {
        this['timeout'] = timeout;
        return this;
    }
    public withCheckInterval(checkInterval: string): GetDevServerJobTemplateResponse {
        this['check_interval'] = checkInterval;
        return this;
    }
    public set checkInterval(checkInterval: string  | undefined) {
        this['check_interval'] = checkInterval;
    }
    public get checkInterval(): string | undefined {
        return this['check_interval'];
    }
    public withType(type: string): GetDevServerJobTemplateResponse {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): GetDevServerJobTemplateResponse {
        this['status'] = status;
        return this;
    }
    public withParams(params: Array<TemplateParam>): GetDevServerJobTemplateResponse {
        this['params'] = params;
        return this;
    }
}