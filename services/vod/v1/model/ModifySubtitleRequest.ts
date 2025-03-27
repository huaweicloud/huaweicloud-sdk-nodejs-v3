import { SubtitleModifyReq } from './SubtitleModifyReq';


export class ModifySubtitleRequest {
    private 'X-Sdk-Date'?: string;
    public body?: SubtitleModifyReq;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ModifySubtitleRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: SubtitleModifyReq): ModifySubtitleRequest {
        this['body'] = body;
        return this;
    }
}