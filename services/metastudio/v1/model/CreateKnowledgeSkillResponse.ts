
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKnowledgeSkillResponse extends SdkResponse {
    private 'skill_id'?: string;
    public identify?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withSkillId(skillId: string): CreateKnowledgeSkillResponse {
        this['skill_id'] = skillId;
        return this;
    }
    public set skillId(skillId: string  | undefined) {
        this['skill_id'] = skillId;
    }
    public get skillId(): string | undefined {
        return this['skill_id'];
    }
    public withIdentify(identify: string): CreateKnowledgeSkillResponse {
        this['identify'] = identify;
        return this;
    }
    public withXRequestId(xRequestId: string): CreateKnowledgeSkillResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}