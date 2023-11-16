import { TempDetail } from './TempDetail';
import { TriggerMetadataList } from './TriggerMetadataList';


export class ShowFunctionTemplateResponseBody {
    public id?: string;
    public type?: number;
    public title?: string;
    private 'template_name'?: string;
    public description?: string;
    public runtime?: string;
    public handler?: string;
    private 'code_type'?: string;
    public code?: string;
    public timeout?: number;
    private 'memory_size'?: number;
    private 'trigger_metadata_list'?: Array<TriggerMetadataList>;
    private 'temp_detail'?: TempDetail;
    private 'user_data'?: string;
    private 'encrypted_user_data'?: string;
    public dependencies?: Array<string>;
    public scene?: string;
    public service?: string;
    public constructor() { 
    }
    public withId(id: string): ShowFunctionTemplateResponseBody {
        this['id'] = id;
        return this;
    }
    public withType(type: number): ShowFunctionTemplateResponseBody {
        this['type'] = type;
        return this;
    }
    public withTitle(title: string): ShowFunctionTemplateResponseBody {
        this['title'] = title;
        return this;
    }
    public withTemplateName(templateName: string): ShowFunctionTemplateResponseBody {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withDescription(description: string): ShowFunctionTemplateResponseBody {
        this['description'] = description;
        return this;
    }
    public withRuntime(runtime: string): ShowFunctionTemplateResponseBody {
        this['runtime'] = runtime;
        return this;
    }
    public withHandler(handler: string): ShowFunctionTemplateResponseBody {
        this['handler'] = handler;
        return this;
    }
    public withCodeType(codeType: string): ShowFunctionTemplateResponseBody {
        this['code_type'] = codeType;
        return this;
    }
    public set codeType(codeType: string  | undefined) {
        this['code_type'] = codeType;
    }
    public get codeType(): string | undefined {
        return this['code_type'];
    }
    public withCode(code: string): ShowFunctionTemplateResponseBody {
        this['code'] = code;
        return this;
    }
    public withTimeout(timeout: number): ShowFunctionTemplateResponseBody {
        this['timeout'] = timeout;
        return this;
    }
    public withMemorySize(memorySize: number): ShowFunctionTemplateResponseBody {
        this['memory_size'] = memorySize;
        return this;
    }
    public set memorySize(memorySize: number  | undefined) {
        this['memory_size'] = memorySize;
    }
    public get memorySize(): number | undefined {
        return this['memory_size'];
    }
    public withTriggerMetadataList(triggerMetadataList: Array<TriggerMetadataList>): ShowFunctionTemplateResponseBody {
        this['trigger_metadata_list'] = triggerMetadataList;
        return this;
    }
    public set triggerMetadataList(triggerMetadataList: Array<TriggerMetadataList>  | undefined) {
        this['trigger_metadata_list'] = triggerMetadataList;
    }
    public get triggerMetadataList(): Array<TriggerMetadataList> | undefined {
        return this['trigger_metadata_list'];
    }
    public withTempDetail(tempDetail: TempDetail): ShowFunctionTemplateResponseBody {
        this['temp_detail'] = tempDetail;
        return this;
    }
    public set tempDetail(tempDetail: TempDetail  | undefined) {
        this['temp_detail'] = tempDetail;
    }
    public get tempDetail(): TempDetail | undefined {
        return this['temp_detail'];
    }
    public withUserData(userData: string): ShowFunctionTemplateResponseBody {
        this['user_data'] = userData;
        return this;
    }
    public set userData(userData: string  | undefined) {
        this['user_data'] = userData;
    }
    public get userData(): string | undefined {
        return this['user_data'];
    }
    public withEncryptedUserData(encryptedUserData: string): ShowFunctionTemplateResponseBody {
        this['encrypted_user_data'] = encryptedUserData;
        return this;
    }
    public set encryptedUserData(encryptedUserData: string  | undefined) {
        this['encrypted_user_data'] = encryptedUserData;
    }
    public get encryptedUserData(): string | undefined {
        return this['encrypted_user_data'];
    }
    public withDependencies(dependencies: Array<string>): ShowFunctionTemplateResponseBody {
        this['dependencies'] = dependencies;
        return this;
    }
    public withScene(scene: string): ShowFunctionTemplateResponseBody {
        this['scene'] = scene;
        return this;
    }
    public withService(service: string): ShowFunctionTemplateResponseBody {
        this['service'] = service;
        return this;
    }
}