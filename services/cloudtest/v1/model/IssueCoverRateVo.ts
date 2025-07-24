import { CoverRateVo } from './CoverRateVo';


export class IssueCoverRateVo {
    public epic?: CoverRateVo;
    public feature?: CoverRateVo;
    public story?: CoverRateVo;
    public summary?: CoverRateVo;
    public constructor() { 
    }
    public withEpic(epic: CoverRateVo): IssueCoverRateVo {
        this['epic'] = epic;
        return this;
    }
    public withFeature(feature: CoverRateVo): IssueCoverRateVo {
        this['feature'] = feature;
        return this;
    }
    public withStory(story: CoverRateVo): IssueCoverRateVo {
        this['story'] = story;
        return this;
    }
    public withSummary(summary: CoverRateVo): IssueCoverRateVo {
        this['summary'] = summary;
        return this;
    }
}