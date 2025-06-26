import { ExtraSessionTypeEnum } from './ExtraSessionTypeEnum';
import { ImageAccountInfo } from './ImageAccountInfo';
import { ImageRef } from './ImageRef';
import { RoutePolicy } from './RoutePolicy';
import { TmsTag } from './TmsTag';
import { Volume } from './Volume';
import { WdhParam } from './WdhParam';


export class CreateImageServerReq {
    public name?: string;
    public description?: string;
    private 'root_volume'?: Volume;
    private 'image_ref'?: ImageRef;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'product_id'?: string;
    private 'flavor_id'?: string;
    private 'availability_zone'?: string;
    private 'attach_apps'?: Array<string>;
    private 'authorize_accounts'?: Array<ImageAccountInfo>;
    private 'ou_name'?: string;
    private 'is_vdi'?: boolean;
    private 'scheduler_hints'?: WdhParam;
    private 'extra_session_type'?: ExtraSessionTypeEnum;
    private 'extra_session_size'?: number;
    private 'route_policy'?: RoutePolicy;
    public tags?: Array<TmsTag>;
    private 'enterprise_project_id'?: string;
    public constructor(name?: string, rootVolume?: Volume, imageRef?: ImageRef, vpcId?: string, subnetId?: string, productId?: string, authorizeAccounts?: Array<ImageAccountInfo>) { 
        this['name'] = name;
        this['root_volume'] = rootVolume;
        this['image_ref'] = imageRef;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['product_id'] = productId;
        this['authorize_accounts'] = authorizeAccounts;
    }
    public withName(name: string): CreateImageServerReq {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateImageServerReq {
        this['description'] = description;
        return this;
    }
    public withRootVolume(rootVolume: Volume): CreateImageServerReq {
        this['root_volume'] = rootVolume;
        return this;
    }
    public set rootVolume(rootVolume: Volume  | undefined) {
        this['root_volume'] = rootVolume;
    }
    public get rootVolume(): Volume | undefined {
        return this['root_volume'];
    }
    public withImageRef(imageRef: ImageRef): CreateImageServerReq {
        this['image_ref'] = imageRef;
        return this;
    }
    public set imageRef(imageRef: ImageRef  | undefined) {
        this['image_ref'] = imageRef;
    }
    public get imageRef(): ImageRef | undefined {
        return this['image_ref'];
    }
    public withVpcId(vpcId: string): CreateImageServerReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateImageServerReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withProductId(productId: string): CreateImageServerReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withFlavorId(flavorId: string): CreateImageServerReq {
        this['flavor_id'] = flavorId;
        return this;
    }
    public set flavorId(flavorId: string  | undefined) {
        this['flavor_id'] = flavorId;
    }
    public get flavorId(): string | undefined {
        return this['flavor_id'];
    }
    public withAvailabilityZone(availabilityZone: string): CreateImageServerReq {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withAttachApps(attachApps: Array<string>): CreateImageServerReq {
        this['attach_apps'] = attachApps;
        return this;
    }
    public set attachApps(attachApps: Array<string>  | undefined) {
        this['attach_apps'] = attachApps;
    }
    public get attachApps(): Array<string> | undefined {
        return this['attach_apps'];
    }
    public withAuthorizeAccounts(authorizeAccounts: Array<ImageAccountInfo>): CreateImageServerReq {
        this['authorize_accounts'] = authorizeAccounts;
        return this;
    }
    public set authorizeAccounts(authorizeAccounts: Array<ImageAccountInfo>  | undefined) {
        this['authorize_accounts'] = authorizeAccounts;
    }
    public get authorizeAccounts(): Array<ImageAccountInfo> | undefined {
        return this['authorize_accounts'];
    }
    public withOuName(ouName: string): CreateImageServerReq {
        this['ou_name'] = ouName;
        return this;
    }
    public set ouName(ouName: string  | undefined) {
        this['ou_name'] = ouName;
    }
    public get ouName(): string | undefined {
        return this['ou_name'];
    }
    public withIsVdi(isVdi: boolean): CreateImageServerReq {
        this['is_vdi'] = isVdi;
        return this;
    }
    public set isVdi(isVdi: boolean  | undefined) {
        this['is_vdi'] = isVdi;
    }
    public get isVdi(): boolean | undefined {
        return this['is_vdi'];
    }
    public withSchedulerHints(schedulerHints: WdhParam): CreateImageServerReq {
        this['scheduler_hints'] = schedulerHints;
        return this;
    }
    public set schedulerHints(schedulerHints: WdhParam  | undefined) {
        this['scheduler_hints'] = schedulerHints;
    }
    public get schedulerHints(): WdhParam | undefined {
        return this['scheduler_hints'];
    }
    public withExtraSessionType(extraSessionType: ExtraSessionTypeEnum): CreateImageServerReq {
        this['extra_session_type'] = extraSessionType;
        return this;
    }
    public set extraSessionType(extraSessionType: ExtraSessionTypeEnum  | undefined) {
        this['extra_session_type'] = extraSessionType;
    }
    public get extraSessionType(): ExtraSessionTypeEnum | undefined {
        return this['extra_session_type'];
    }
    public withExtraSessionSize(extraSessionSize: number): CreateImageServerReq {
        this['extra_session_size'] = extraSessionSize;
        return this;
    }
    public set extraSessionSize(extraSessionSize: number  | undefined) {
        this['extra_session_size'] = extraSessionSize;
    }
    public get extraSessionSize(): number | undefined {
        return this['extra_session_size'];
    }
    public withRoutePolicy(routePolicy: RoutePolicy): CreateImageServerReq {
        this['route_policy'] = routePolicy;
        return this;
    }
    public set routePolicy(routePolicy: RoutePolicy  | undefined) {
        this['route_policy'] = routePolicy;
    }
    public get routePolicy(): RoutePolicy | undefined {
        return this['route_policy'];
    }
    public withTags(tags: Array<TmsTag>): CreateImageServerReq {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateImageServerReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}