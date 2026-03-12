
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadCsrResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'create_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): UploadCsrResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): UploadCsrResponse {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: number): UploadCsrResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}