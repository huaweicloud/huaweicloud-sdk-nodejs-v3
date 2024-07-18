
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadAutopilotChartResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public values?: string;
    public translate?: string;
    public instruction?: string;
    public version?: string;
    public description?: string;
    public source?: string;
    private 'icon_url'?: string;
    private 'public'?: boolean;
    private 'chart_url'?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): UploadAutopilotChartResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UploadAutopilotChartResponse {
        this['name'] = name;
        return this;
    }
    public withValues(values: string): UploadAutopilotChartResponse {
        this['values'] = values;
        return this;
    }
    public withTranslate(translate: string): UploadAutopilotChartResponse {
        this['translate'] = translate;
        return this;
    }
    public withInstruction(instruction: string): UploadAutopilotChartResponse {
        this['instruction'] = instruction;
        return this;
    }
    public withVersion(version: string): UploadAutopilotChartResponse {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): UploadAutopilotChartResponse {
        this['description'] = description;
        return this;
    }
    public withSource(source: string): UploadAutopilotChartResponse {
        this['source'] = source;
        return this;
    }
    public withIconUrl(iconUrl: string): UploadAutopilotChartResponse {
        this['icon_url'] = iconUrl;
        return this;
    }
    public set iconUrl(iconUrl: string  | undefined) {
        this['icon_url'] = iconUrl;
    }
    public get iconUrl(): string | undefined {
        return this['icon_url'];
    }
    public withPublic(_public: boolean): UploadAutopilotChartResponse {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: boolean  | undefined) {
        this['public'] = _public;
    }
    public get _public(): boolean | undefined {
        return this['public'];
    }
    public withChartUrl(chartUrl: string): UploadAutopilotChartResponse {
        this['chart_url'] = chartUrl;
        return this;
    }
    public set chartUrl(chartUrl: string  | undefined) {
        this['chart_url'] = chartUrl;
    }
    public get chartUrl(): string | undefined {
        return this['chart_url'];
    }
    public withCreateAt(createAt: string): UploadAutopilotChartResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): UploadAutopilotChartResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
}