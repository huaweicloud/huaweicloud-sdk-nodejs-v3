import { ReferencedRule } from './ReferencedRule';


export class AtlasItem {
    public id?: string;
    public name?: string;
    public type?: number;
    public description?: string;
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'image_count'?: number;
    private 'referenced_rules'?: Array<ReferencedRule>;
    public constructor() { 
    }
    public withId(id: string): AtlasItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AtlasItem {
        this['name'] = name;
        return this;
    }
    public withType(type: number): AtlasItem {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): AtlasItem {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): AtlasItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): AtlasItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withImageCount(imageCount: number): AtlasItem {
        this['image_count'] = imageCount;
        return this;
    }
    public set imageCount(imageCount: number  | undefined) {
        this['image_count'] = imageCount;
    }
    public get imageCount(): number | undefined {
        return this['image_count'];
    }
    public withReferencedRules(referencedRules: Array<ReferencedRule>): AtlasItem {
        this['referenced_rules'] = referencedRules;
        return this;
    }
    public set referencedRules(referencedRules: Array<ReferencedRule>  | undefined) {
        this['referenced_rules'] = referencedRules;
    }
    public get referencedRules(): Array<ReferencedRule> | undefined {
        return this['referenced_rules'];
    }
}