import { PwdCheckSubTagInfo } from './PwdCheckSubTagInfo';


export class PwdCheckTagInfo {
    public tag?: string;
    public checked?: string;
    private 'sub_tags'?: Array<PwdCheckSubTagInfo>;
    public constructor() { 
    }
    public withTag(tag: string): PwdCheckTagInfo {
        this['tag'] = tag;
        return this;
    }
    public withChecked(checked: string): PwdCheckTagInfo {
        this['checked'] = checked;
        return this;
    }
    public withSubTags(subTags: Array<PwdCheckSubTagInfo>): PwdCheckTagInfo {
        this['sub_tags'] = subTags;
        return this;
    }
    public set subTags(subTags: Array<PwdCheckSubTagInfo>  | undefined) {
        this['sub_tags'] = subTags;
    }
    public get subTags(): Array<PwdCheckSubTagInfo> | undefined {
        return this['sub_tags'];
    }
}