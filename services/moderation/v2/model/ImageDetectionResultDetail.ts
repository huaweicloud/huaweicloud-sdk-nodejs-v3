import { ImageDetectionResultAdDetail } from './ImageDetectionResultAdDetail';
import { ImageDetectionResultDetailPolitics } from './ImageDetectionResultDetailPolitics';
import { ImageDetectionResultSimpleDetail } from './ImageDetectionResultSimpleDetail';


export class ImageDetectionResultDetail {
    public politics?: Array<ImageDetectionResultDetailPolitics>;
    public porn?: Array<ImageDetectionResultSimpleDetail>;
    public terrorism?: Array<ImageDetectionResultSimpleDetail>;
    public ad?: Array<ImageDetectionResultAdDetail>;
    public constructor() { 
    }
    public withPolitics(politics: Array<ImageDetectionResultDetailPolitics>): ImageDetectionResultDetail {
        this['politics'] = politics;
        return this;
    }
    public withPorn(porn: Array<ImageDetectionResultSimpleDetail>): ImageDetectionResultDetail {
        this['porn'] = porn;
        return this;
    }
    public withTerrorism(terrorism: Array<ImageDetectionResultSimpleDetail>): ImageDetectionResultDetail {
        this['terrorism'] = terrorism;
        return this;
    }
    public withAd(ad: Array<ImageDetectionResultAdDetail>): ImageDetectionResultDetail {
        this['ad'] = ad;
        return this;
    }
}