
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBotMRuleResponse extends SdkResponse {
    public id?: number;
    public name?: string;
    public description?: string;
    public features?: Array<string>;
    public category?: number;
    private 'sub_category'?: number;
    private 'defense_action'?: number;
    private 'created_time'?: number;
    private 'modified_time'?: number;
    public status?: boolean;
    private 'interaction_confidence'?: number;
    public constructor() { 
        super();
    }
    public withId(id: number): ShowBotMRuleResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowBotMRuleResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowBotMRuleResponse {
        this['description'] = description;
        return this;
    }
    public withFeatures(features: Array<string>): ShowBotMRuleResponse {
        this['features'] = features;
        return this;
    }
    public withCategory(category: number): ShowBotMRuleResponse {
        this['category'] = category;
        return this;
    }
    public withSubCategory(subCategory: number): ShowBotMRuleResponse {
        this['sub_category'] = subCategory;
        return this;
    }
    public set subCategory(subCategory: number  | undefined) {
        this['sub_category'] = subCategory;
    }
    public get subCategory(): number | undefined {
        return this['sub_category'];
    }
    public withDefenseAction(defenseAction: number): ShowBotMRuleResponse {
        this['defense_action'] = defenseAction;
        return this;
    }
    public set defenseAction(defenseAction: number  | undefined) {
        this['defense_action'] = defenseAction;
    }
    public get defenseAction(): number | undefined {
        return this['defense_action'];
    }
    public withCreatedTime(createdTime: number): ShowBotMRuleResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: number  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): number | undefined {
        return this['created_time'];
    }
    public withModifiedTime(modifiedTime: number): ShowBotMRuleResponse {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: number  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): number | undefined {
        return this['modified_time'];
    }
    public withStatus(status: boolean): ShowBotMRuleResponse {
        this['status'] = status;
        return this;
    }
    public withInteractionConfidence(interactionConfidence: number): ShowBotMRuleResponse {
        this['interaction_confidence'] = interactionConfidence;
        return this;
    }
    public set interactionConfidence(interactionConfidence: number  | undefined) {
        this['interaction_confidence'] = interactionConfidence;
    }
    public get interactionConfidence(): number | undefined {
        return this['interaction_confidence'];
    }
}