import { ResizeExclusiveLitesReq } from './ResizeExclusiveLitesReq';
import { Volume } from './Volume';


export class CreateExclusiveHostsReq {
    private 'availability_zone'?: string;
    public name?: string;
    private 'apply_desktop_quantity'?: number;
    public quantity?: number;
    private 'order_id'?: string;
    private 'product_id'?: string;
    private 'image_volumes'?: Array<Volume>;
    private 'enterprise_project_id'?: string;
    private 'memory_volumes'?: Array<Volume>;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'resize_exclusive_lites'?: ResizeExclusiveLitesReq;
    public constructor(availabilityZone?: string, quantity?: number, productId?: string, imageVolumes?: Array<Volume>, memoryVolumes?: Array<Volume>, vpcId?: string, subnetId?: string) { 
        this['availability_zone'] = availabilityZone;
        this['quantity'] = quantity;
        this['product_id'] = productId;
        this['image_volumes'] = imageVolumes;
        this['memory_volumes'] = memoryVolumes;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withAvailabilityZone(availabilityZone: string): CreateExclusiveHostsReq {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withName(name: string): CreateExclusiveHostsReq {
        this['name'] = name;
        return this;
    }
    public withApplyDesktopQuantity(applyDesktopQuantity: number): CreateExclusiveHostsReq {
        this['apply_desktop_quantity'] = applyDesktopQuantity;
        return this;
    }
    public set applyDesktopQuantity(applyDesktopQuantity: number  | undefined) {
        this['apply_desktop_quantity'] = applyDesktopQuantity;
    }
    public get applyDesktopQuantity(): number | undefined {
        return this['apply_desktop_quantity'];
    }
    public withQuantity(quantity: number): CreateExclusiveHostsReq {
        this['quantity'] = quantity;
        return this;
    }
    public withOrderId(orderId: string): CreateExclusiveHostsReq {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withProductId(productId: string): CreateExclusiveHostsReq {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string  | undefined) {
        this['product_id'] = productId;
    }
    public get productId(): string | undefined {
        return this['product_id'];
    }
    public withImageVolumes(imageVolumes: Array<Volume>): CreateExclusiveHostsReq {
        this['image_volumes'] = imageVolumes;
        return this;
    }
    public set imageVolumes(imageVolumes: Array<Volume>  | undefined) {
        this['image_volumes'] = imageVolumes;
    }
    public get imageVolumes(): Array<Volume> | undefined {
        return this['image_volumes'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateExclusiveHostsReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withMemoryVolumes(memoryVolumes: Array<Volume>): CreateExclusiveHostsReq {
        this['memory_volumes'] = memoryVolumes;
        return this;
    }
    public set memoryVolumes(memoryVolumes: Array<Volume>  | undefined) {
        this['memory_volumes'] = memoryVolumes;
    }
    public get memoryVolumes(): Array<Volume> | undefined {
        return this['memory_volumes'];
    }
    public withVpcId(vpcId: string): CreateExclusiveHostsReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateExclusiveHostsReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withResizeExclusiveLites(resizeExclusiveLites: ResizeExclusiveLitesReq): CreateExclusiveHostsReq {
        this['resize_exclusive_lites'] = resizeExclusiveLites;
        return this;
    }
    public set resizeExclusiveLites(resizeExclusiveLites: ResizeExclusiveLitesReq  | undefined) {
        this['resize_exclusive_lites'] = resizeExclusiveLites;
    }
    public get resizeExclusiveLites(): ResizeExclusiveLitesReq | undefined {
        return this['resize_exclusive_lites'];
    }
}