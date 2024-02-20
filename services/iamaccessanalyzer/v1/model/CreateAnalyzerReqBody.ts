import { AnalyzerType } from './AnalyzerType';
import { Tag } from './Tag';


export class CreateAnalyzerReqBody {
    public name?: string;
    public tags?: Array<Tag>;
    public type?: AnalyzerType;
    public constructor(name?: string, type?: AnalyzerType) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): CreateAnalyzerReqBody {
        this['name'] = name;
        return this;
    }
    public withTags(tags: Array<Tag>): CreateAnalyzerReqBody {
        this['tags'] = tags;
        return this;
    }
    public withType(type: AnalyzerType): CreateAnalyzerReqBody {
        this['type'] = type;
        return this;
    }
}