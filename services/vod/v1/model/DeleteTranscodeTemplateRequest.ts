

export class DeleteTranscodeTemplateRequest {
    private 'X-Sdk-Date'?: string | undefined;
    private 'group_id': string | undefined;
    public constructor(groupId?: any) { 
        this['group_id'] = groupId;
    }
    public withXSdkDate(xSdkDate: string): DeleteTranscodeTemplateRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withGroupId(groupId: string): DeleteTranscodeTemplateRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
}