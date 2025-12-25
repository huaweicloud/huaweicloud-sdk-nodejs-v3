
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UploadAgentFileResponse extends SdkResponse {
    public url?: string;
    public headers?: { [key: string]: string; };
    private 'file_name'?: string;
    public constructor() { 
        super();
    }
    public withUrl(url: string): UploadAgentFileResponse {
        this['url'] = url;
        return this;
    }
    public withHeaders(headers: { [key: string]: string; }): UploadAgentFileResponse {
        this['headers'] = headers;
        return this;
    }
    public withFileName(fileName: string): UploadAgentFileResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
}