import { AutoClassificationResultStatus } from './AutoClassificationResultStatus';


export class AutoClassificationResult {
    public status?: AutoClassificationResultStatus;
    public content?: object;
    public type?: string;
    public location?: Array<Array<number>>;
    private 'seal_mark'?: boolean;
    public constructor(status?: AutoClassificationResultStatus, content?: object, type?: string, location?: Array<Array<number>>) { 
        this['status'] = status;
        this['content'] = content;
        this['type'] = type;
        this['location'] = location;
    }
    public withStatus(status: AutoClassificationResultStatus): AutoClassificationResult {
        this['status'] = status;
        return this;
    }
    public withContent(content: object): AutoClassificationResult {
        this['content'] = content;
        return this;
    }
    public withType(type: string): AutoClassificationResult {
        this['type'] = type;
        return this;
    }
    public withLocation(location: Array<Array<number>>): AutoClassificationResult {
        this['location'] = location;
        return this;
    }
    public withSealMark(sealMark: boolean): AutoClassificationResult {
        this['seal_mark'] = sealMark;
        return this;
    }
    public set sealMark(sealMark: boolean  | undefined) {
        this['seal_mark'] = sealMark;
    }
    public get sealMark(): boolean | undefined {
        return this['seal_mark'];
    }
}