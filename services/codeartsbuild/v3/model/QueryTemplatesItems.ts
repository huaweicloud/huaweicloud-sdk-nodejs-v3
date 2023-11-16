import { CreateBuildJobParameter } from './CreateBuildJobParameter';
import { QueryTemplate } from './QueryTemplate';


export class QueryTemplatesItems {
    public favourite?: boolean;
    private 'nick_name'?: string;
    public id?: string;
    public uuid?: string;
    public template?: QueryTemplate;
    public type?: string;
    private 'public'?: boolean;
    public name?: string;
    private 'create_time'?: string;
    private 'domain_id'?: string;
    public weight?: number;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'domain_name'?: string;
    public scope?: string;
    public description?: string;
    private 'tool_type'?: string;
    private 'intl_description'?: object;
    public parameters?: Array<CreateBuildJobParameter>;
    public i18n?: object;
    public constructor() { 
    }
    public withFavourite(favourite: boolean): QueryTemplatesItems {
        this['favourite'] = favourite;
        return this;
    }
    public withNickName(nickName: string): QueryTemplatesItems {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withId(id: string): QueryTemplatesItems {
        this['id'] = id;
        return this;
    }
    public withUuid(uuid: string): QueryTemplatesItems {
        this['uuid'] = uuid;
        return this;
    }
    public withTemplate(template: QueryTemplate): QueryTemplatesItems {
        this['template'] = template;
        return this;
    }
    public withType(type: string): QueryTemplatesItems {
        this['type'] = type;
        return this;
    }
    public withPublic(_public: boolean): QueryTemplatesItems {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: boolean  | undefined) {
        this['public'] = _public;
    }
    public get _public(): boolean | undefined {
        return this['public'];
    }
    public withName(name: string): QueryTemplatesItems {
        this['name'] = name;
        return this;
    }
    public withCreateTime(createTime: string): QueryTemplatesItems {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withDomainId(domainId: string): QueryTemplatesItems {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withWeight(weight: number): QueryTemplatesItems {
        this['weight'] = weight;
        return this;
    }
    public withUserId(userId: string): QueryTemplatesItems {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): QueryTemplatesItems {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomainName(domainName: string): QueryTemplatesItems {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withScope(scope: string): QueryTemplatesItems {
        this['scope'] = scope;
        return this;
    }
    public withDescription(description: string): QueryTemplatesItems {
        this['description'] = description;
        return this;
    }
    public withToolType(toolType: string): QueryTemplatesItems {
        this['tool_type'] = toolType;
        return this;
    }
    public set toolType(toolType: string  | undefined) {
        this['tool_type'] = toolType;
    }
    public get toolType(): string | undefined {
        return this['tool_type'];
    }
    public withIntlDescription(intlDescription: object): QueryTemplatesItems {
        this['intl_description'] = intlDescription;
        return this;
    }
    public set intlDescription(intlDescription: object  | undefined) {
        this['intl_description'] = intlDescription;
    }
    public get intlDescription(): object | undefined {
        return this['intl_description'];
    }
    public withParameters(parameters: Array<CreateBuildJobParameter>): QueryTemplatesItems {
        this['parameters'] = parameters;
        return this;
    }
    public withI18n(i18n: object): QueryTemplatesItems {
        this['i18n'] = i18n;
        return this;
    }
}