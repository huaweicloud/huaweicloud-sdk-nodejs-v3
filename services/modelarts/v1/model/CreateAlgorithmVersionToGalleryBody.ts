import { AlgorithmInfo } from './AlgorithmInfo';
import { ContentInfo } from './ContentInfo';


export class CreateAlgorithmVersionToGalleryBody {
    private 'content_id'?: string;
    private 'content_info'?: ContentInfo;
    public algorithm?: AlgorithmInfo;
    public constructor() { 
    }
    public withContentId(contentId: string): CreateAlgorithmVersionToGalleryBody {
        this['content_id'] = contentId;
        return this;
    }
    public set contentId(contentId: string  | undefined) {
        this['content_id'] = contentId;
    }
    public get contentId(): string | undefined {
        return this['content_id'];
    }
    public withContentInfo(contentInfo: ContentInfo): CreateAlgorithmVersionToGalleryBody {
        this['content_info'] = contentInfo;
        return this;
    }
    public set contentInfo(contentInfo: ContentInfo  | undefined) {
        this['content_info'] = contentInfo;
    }
    public get contentInfo(): ContentInfo | undefined {
        return this['content_info'];
    }
    public withAlgorithm(algorithm: AlgorithmInfo): CreateAlgorithmVersionToGalleryBody {
        this['algorithm'] = algorithm;
        return this;
    }
}