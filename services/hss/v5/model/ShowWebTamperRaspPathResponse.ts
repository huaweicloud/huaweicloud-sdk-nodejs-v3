
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWebTamperRaspPathResponse extends SdkResponse {
    private 'rasp_path'?: string;
    public constructor() { 
        super();
    }
    public withRaspPath(raspPath: string): ShowWebTamperRaspPathResponse {
        this['rasp_path'] = raspPath;
        return this;
    }
    public set raspPath(raspPath: string  | undefined) {
        this['rasp_path'] = raspPath;
    }
    public get raspPath(): string | undefined {
        return this['rasp_path'];
    }
}