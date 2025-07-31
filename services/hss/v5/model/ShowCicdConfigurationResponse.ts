
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCicdConfigurationResponse extends SdkResponse {
    private 'cicd_id'?: string;
    private 'cicd_name'?: string;
    private 'associated_images_num'?: number;
    private 'vulnerability_whitelist'?: Array<string>;
    private 'vulnerability_blocklist'?: Array<string>;
    private 'image_whitelist'?: Array<string>;
    public constructor() { 
        super();
    }
    public withCicdId(cicdId: string): ShowCicdConfigurationResponse {
        this['cicd_id'] = cicdId;
        return this;
    }
    public set cicdId(cicdId: string  | undefined) {
        this['cicd_id'] = cicdId;
    }
    public get cicdId(): string | undefined {
        return this['cicd_id'];
    }
    public withCicdName(cicdName: string): ShowCicdConfigurationResponse {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
    public withAssociatedImagesNum(associatedImagesNum: number): ShowCicdConfigurationResponse {
        this['associated_images_num'] = associatedImagesNum;
        return this;
    }
    public set associatedImagesNum(associatedImagesNum: number  | undefined) {
        this['associated_images_num'] = associatedImagesNum;
    }
    public get associatedImagesNum(): number | undefined {
        return this['associated_images_num'];
    }
    public withVulnerabilityWhitelist(vulnerabilityWhitelist: Array<string>): ShowCicdConfigurationResponse {
        this['vulnerability_whitelist'] = vulnerabilityWhitelist;
        return this;
    }
    public set vulnerabilityWhitelist(vulnerabilityWhitelist: Array<string>  | undefined) {
        this['vulnerability_whitelist'] = vulnerabilityWhitelist;
    }
    public get vulnerabilityWhitelist(): Array<string> | undefined {
        return this['vulnerability_whitelist'];
    }
    public withVulnerabilityBlocklist(vulnerabilityBlocklist: Array<string>): ShowCicdConfigurationResponse {
        this['vulnerability_blocklist'] = vulnerabilityBlocklist;
        return this;
    }
    public set vulnerabilityBlocklist(vulnerabilityBlocklist: Array<string>  | undefined) {
        this['vulnerability_blocklist'] = vulnerabilityBlocklist;
    }
    public get vulnerabilityBlocklist(): Array<string> | undefined {
        return this['vulnerability_blocklist'];
    }
    public withImageWhitelist(imageWhitelist: Array<string>): ShowCicdConfigurationResponse {
        this['image_whitelist'] = imageWhitelist;
        return this;
    }
    public set imageWhitelist(imageWhitelist: Array<string>  | undefined) {
        this['image_whitelist'] = imageWhitelist;
    }
    public get imageWhitelist(): Array<string> | undefined {
        return this['image_whitelist'];
    }
}