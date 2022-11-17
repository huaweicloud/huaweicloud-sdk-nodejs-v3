

export class UpdateTopicRequestBody {
    private 'display_name': string | undefined;
    public constructor(displayName?: any) { 
        this['display_name'] = displayName;
    }
    public withDisplayName(displayName: string): UpdateTopicRequestBody {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
}