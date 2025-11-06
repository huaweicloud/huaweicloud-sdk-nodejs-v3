
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowReadmeFileResponse extends SdkResponse {
    private 'blob_id'?: string;
    public content?: string;
    public encoding?: object;
    private 'file_name'?: string;
    private 'file_path'?: string;
    private 'file_type'?: string;
    public size?: number;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withBlobId(blobId: string): ShowReadmeFileResponse {
        this['blob_id'] = blobId;
        return this;
    }
    public set blobId(blobId: string  | undefined) {
        this['blob_id'] = blobId;
    }
    public get blobId(): string | undefined {
        return this['blob_id'];
    }
    public withContent(content: string): ShowReadmeFileResponse {
        this['content'] = content;
        return this;
    }
    public withEncoding(encoding: object): ShowReadmeFileResponse {
        this['encoding'] = encoding;
        return this;
    }
    public withFileName(fileName: string): ShowReadmeFileResponse {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withFilePath(filePath: string): ShowReadmeFileResponse {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileType(fileType: string): ShowReadmeFileResponse {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): string | undefined {
        return this['file_type'];
    }
    public withSize(size: number): ShowReadmeFileResponse {
        this['size'] = size;
        return this;
    }
    public withXTotal(xTotal: string): ShowReadmeFileResponse {
        this['X-Total'] = xTotal;
        return this;
    }
    public set xTotal(xTotal: string  | undefined) {
        this['X-Total'] = xTotal;
    }
    public get xTotal(): string | undefined {
        return this['X-Total'];
    }
}