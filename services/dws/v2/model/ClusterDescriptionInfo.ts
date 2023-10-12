

export class ClusterDescriptionInfo {
    private 'description_info'?: string;
    public constructor(descriptionInfo?: string) { 
        this['description_info'] = descriptionInfo;
    }
    public withDescriptionInfo(descriptionInfo: string): ClusterDescriptionInfo {
        this['description_info'] = descriptionInfo;
        return this;
    }
    public set descriptionInfo(descriptionInfo: string  | undefined) {
        this['description_info'] = descriptionInfo;
    }
    public get descriptionInfo(): string | undefined {
        return this['description_info'];
    }
}