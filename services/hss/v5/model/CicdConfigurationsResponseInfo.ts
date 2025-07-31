

export class CicdConfigurationsResponseInfo {
    private 'cicd_id'?: string;
    private 'cicd_name'?: string;
    private 'associated_images_num'?: number;
    private 'associated_config_num'?: number;
    public constructor() { 
    }
    public withCicdId(cicdId: string): CicdConfigurationsResponseInfo {
        this['cicd_id'] = cicdId;
        return this;
    }
    public set cicdId(cicdId: string  | undefined) {
        this['cicd_id'] = cicdId;
    }
    public get cicdId(): string | undefined {
        return this['cicd_id'];
    }
    public withCicdName(cicdName: string): CicdConfigurationsResponseInfo {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
    public withAssociatedImagesNum(associatedImagesNum: number): CicdConfigurationsResponseInfo {
        this['associated_images_num'] = associatedImagesNum;
        return this;
    }
    public set associatedImagesNum(associatedImagesNum: number  | undefined) {
        this['associated_images_num'] = associatedImagesNum;
    }
    public get associatedImagesNum(): number | undefined {
        return this['associated_images_num'];
    }
    public withAssociatedConfigNum(associatedConfigNum: number): CicdConfigurationsResponseInfo {
        this['associated_config_num'] = associatedConfigNum;
        return this;
    }
    public set associatedConfigNum(associatedConfigNum: number  | undefined) {
        this['associated_config_num'] = associatedConfigNum;
    }
    public get associatedConfigNum(): number | undefined {
        return this['associated_config_num'];
    }
}