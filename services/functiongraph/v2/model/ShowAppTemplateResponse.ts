import { AppTemplateResourceDetail } from './AppTemplateResourceDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppTemplateResponse extends SdkResponse {
    public name?: string;
    public description?: string;
    public runtime?: string;
    public category?: string;
    public params?: string;
    public image?: string;
    private 'deploy_count'?: number;
    public version?: number;
    private 'template_guide'?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public resources?: Array<AppTemplateResourceDetail>;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowAppTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowAppTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withRuntime(runtime: string): ShowAppTemplateResponse {
        this['runtime'] = runtime;
        return this;
    }
    public withCategory(category: string): ShowAppTemplateResponse {
        this['category'] = category;
        return this;
    }
    public withParams(params: string): ShowAppTemplateResponse {
        this['params'] = params;
        return this;
    }
    public withImage(image: string): ShowAppTemplateResponse {
        this['image'] = image;
        return this;
    }
    public withDeployCount(deployCount: number): ShowAppTemplateResponse {
        this['deploy_count'] = deployCount;
        return this;
    }
    public set deployCount(deployCount: number  | undefined) {
        this['deploy_count'] = deployCount;
    }
    public get deployCount(): number | undefined {
        return this['deploy_count'];
    }
    public withVersion(version: number): ShowAppTemplateResponse {
        this['version'] = version;
        return this;
    }
    public withTemplateGuide(templateGuide: string): ShowAppTemplateResponse {
        this['template_guide'] = templateGuide;
        return this;
    }
    public set templateGuide(templateGuide: string  | undefined) {
        this['template_guide'] = templateGuide;
    }
    public get templateGuide(): string | undefined {
        return this['template_guide'];
    }
    public withCreateTime(createTime: number): ShowAppTemplateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ShowAppTemplateResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withResources(resources: Array<AppTemplateResourceDetail>): ShowAppTemplateResponse {
        this['resources'] = resources;
        return this;
    }
}