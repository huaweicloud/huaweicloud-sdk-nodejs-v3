
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCollectorFilesResponse extends SdkResponse {
    private 'field_id'?: string;
    private 'file_name'?: string;
    public path?: string;
    public constructor() { 
        super();
    }
    public withFieldId(fieldId: string): CreateCollectorFilesResponse {
        this['field_id'] = fieldId;
        return this;
    }
    public set fieldId(fieldId: string  | undefined) {
        this['field_id'] = fieldId;
    }
    public get fieldId(): string | undefined {
        return this['field_id'];
    }
    public withFileName(fileName: string): CreateCollectorFilesResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withPath(path: string): CreateCollectorFilesResponse {
        this['path'] = path;
        return this;
    }
}