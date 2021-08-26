import { CompareFace } from './CompareFace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CompareFaceByFileResponse extends SdkResponse {
    private 'image1_face'?: CompareFace | undefined;
    private 'image2_face'?: CompareFace | undefined;
    public similarity?: number;
    public constructor() { 
        super();
    }
    public withImage1Face(image1Face: CompareFace): CompareFaceByFileResponse {
        this['image1_face'] = image1Face;
        return this;
    }
    public set image1Face(image1Face: CompareFace | undefined) {
        this['image1_face'] = image1Face;
    }
    public get image1Face() {
        return this['image1_face'];
    }
    public withImage2Face(image2Face: CompareFace): CompareFaceByFileResponse {
        this['image2_face'] = image2Face;
        return this;
    }
    public set image2Face(image2Face: CompareFace | undefined) {
        this['image2_face'] = image2Face;
    }
    public get image2Face() {
        return this['image2_face'];
    }
    public withSimilarity(similarity: number): CompareFaceByFileResponse {
        this['similarity'] = similarity;
        return this;
    }
}