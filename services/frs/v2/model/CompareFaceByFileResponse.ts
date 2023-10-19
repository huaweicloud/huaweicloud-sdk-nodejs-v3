import { CompareFace } from './CompareFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CompareFaceByFileResponse extends SdkResponse {
    private 'image1_face'?: CompareFace;
    private 'image2_face'?: CompareFace;
    public similarity?: number;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withImage1Face(image1Face: CompareFace): CompareFaceByFileResponse {
        this['image1_face'] = image1Face;
        return this;
    }
    public set image1Face(image1Face: CompareFace  | undefined) {
        this['image1_face'] = image1Face;
    }
    public get image1Face(): CompareFace | undefined {
        return this['image1_face'];
    }
    public withImage2Face(image2Face: CompareFace): CompareFaceByFileResponse {
        this['image2_face'] = image2Face;
        return this;
    }
    public set image2Face(image2Face: CompareFace  | undefined) {
        this['image2_face'] = image2Face;
    }
    public get image2Face(): CompareFace | undefined {
        return this['image2_face'];
    }
    public withSimilarity(similarity: number): CompareFaceByFileResponse {
        this['similarity'] = similarity;
        return this;
    }
    public withXRequestId(xRequestId: string): CompareFaceByFileResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}