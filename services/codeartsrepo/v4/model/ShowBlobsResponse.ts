
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBlobsResponse extends SdkResponse {
    public size?: number;
    public encoding?: string;
    public content?: string;
    private 'blob_id'?: string;
    private 'X-Total'?: string;
    public constructor() { 
        super();
    }
    public withSize(size: number): ShowBlobsResponse {
        this['size'] = size;
        return this;
    }
    public withEncoding(encoding: string): ShowBlobsResponse {
        this['encoding'] = encoding;
        return this;
    }
    public withContent(content: string): ShowBlobsResponse {
        this['content'] = content;
        return this;
    }
    public withBlobId(blobId: string): ShowBlobsResponse {
        this['blob_id'] = blobId;
        return this;
    }
    public set blobId(blobId: string  | undefined) {
        this['blob_id'] = blobId;
    }
    public get blobId(): string | undefined {
        return this['blob_id'];
    }
    public withXTotal(xTotal: string): ShowBlobsResponse {
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