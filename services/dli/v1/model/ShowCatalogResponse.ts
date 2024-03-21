
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCatalogResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public name?: string;
    private 'create_time'?: number;
    public parameters?: { [key: string]: string; };
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowCatalogResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withName(name: string): ShowCatalogResponse {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: number): ShowCatalogResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withParameters(parameters: { [key: string]: string; }): ShowCatalogResponse {
        this['parameters'] = parameters;
        return this;
    }
}