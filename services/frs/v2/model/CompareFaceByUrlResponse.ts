import { CompareFace } from './CompareFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CompareFaceByUrlResponse extends SdkResponse {
    private 'image1_face'?: CompareFace;
    private 'image2_face'?: CompareFace;
    public similarity?: number;
    public constructor() { 
        super();
    }
    public withImage1Face(image1Face: CompareFace): CompareFaceByUrlResponse {
        this['image1_face'] = image1Face;
        return this;
    }
    public set image1Face(image1Face: CompareFace  | undefined) {
        this['image1_face'] = image1Face;
    }
    public get image1Face(): CompareFace | undefined {
        return this['image1_face'];
    }
    public withImage2Face(image2Face: CompareFace): CompareFaceByUrlResponse {
        this['image2_face'] = image2Face;
        return this;
    }
    public set image2Face(image2Face: CompareFace  | undefined) {
        this['image2_face'] = image2Face;
    }
    public get image2Face(): CompareFace | undefined {
        return this['image2_face'];
    }
    public withSimilarity(similarity: number): CompareFaceByUrlResponse {
        this['similarity'] = similarity;
        return this;
    }
}